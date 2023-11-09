import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select, Space, Divider } from "antd";
import { useState, useRef } from "react";
const { Option } = Select;
const areas = [
  {
    label: "Beijing",
    value: "Beijing",
  },
  {
    label: "Shanghai",
    value: "Shanghai",
  },
];

const types = [
  {
    label: "模式1",
    value: "moshi1",
  },
  {
    label: "模式2",
    value: "moshi2",
  },
];

const sights = {
  Beijing: ["Tiananmen", "Great Wall"],
  Shanghai: ["Oriental Pearl", "The Bund"],
};
let index = 0;
const App = () => {
  const [form] = Form.useForm();
  const [items, setItems] = useState(types);
  const [name, setName] = useState("");
  const inputRef = useRef(null);
  const onNameChange = (event) => {
    setName(event.target.value);
  };
  const addItem = (e) => {
    e.preventDefault();
    setItems([...items, { label: name, value: name } || `New item ${index++}`]);
    setName("");
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  const handleSelectChange = (fields, field) => {
    console.log("fields----", fields);
    console.log("field----", field);
  };

  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };
  const handleChange = () => {
    form.setFieldsValue({
      sights: [],
    });
  };
  return (
    <Form
      form={form}
      name="dynamic_form_complex"
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        name="area"
        label="Area"
        rules={[
          {
            required: true,
            message: "Missing area",
          },
        ]}
      >
        <Select options={areas} onChange={handleChange} />
      </Form.Item>
      <Form.List name="sights">
        {(fields, { add, remove }) => (
          <>
            {fields.map((field, index) => (
              <Space key={field.key} align="start">
                <Form.Item
                  noStyle
                  shouldUpdate={(prevValues, curValues) =>
                    prevValues.area !== curValues.area ||
                    prevValues.sights !== curValues.sights
                  }
                >
                  {() => (
                    <Form.Item
                      {...field}
                      label={`合作模式${index + 1}`}
                      name={[field.name, "sight"]}
                      rules={[
                        {
                          required: true,
                          message: "请选择模式",
                        },
                      ]}
                    >
                      {/* <Select
                        style={{
                          width: 130,
                        }}
                        allowClear
                        options={types}
                      >
                      </Select> */}

                      <Select
                        style={{
                          width: 300,
                        }}
                        onChange={() => handleSelectChange(fields, field)}
                        placeholder="custom dropdown render"
                        allowClear
                        dropdownRender={(menu) => (
                          <>
                            {menu}
                            <Divider
                              style={{
                                margin: "8px 0",
                              }}
                            />
                            <Space
                              style={{
                                padding: "0 8px 4px",
                              }}
                            >
                              <Input
                                placeholder="Please enter item"
                                ref={inputRef}
                                value={name}
                                onChange={onNameChange}
                              />
                              <Button
                                type="text"
                                icon={<PlusOutlined />}
                                onClick={addItem}
                              >
                                Add item
                              </Button>
                            </Space>
                          </>
                        )}
                        options={items}
                      />
                    </Form.Item>
                  )}
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(field.name)} />
              </Space>
            ))}

            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add sights
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default App;
