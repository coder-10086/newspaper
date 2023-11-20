
import { useState, useRef } from 'react';
import { Button, Modal, Form, InputNumber, Divider, Switch, Row, Col, Select, Space, Input} from 'antd';
import {PlusOutlined, DeleteOutlined } from '@ant-design/icons'

const switchStyle = {
    with: '100%',
    padding: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: '5px',
    backgroundColor: '#e3e4ea'
    
}

const requiredStyel = {
  color: '#ff4d4f',
  fontFamily: 'SimSun,sans-serif',
  fontSize: '16px'
}

const flexStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}

let defaultObj = {
  list: [
    {},
    {},
    {}
  ],
  addList: [
  {}
  ]
}

let index = 0;


// const [form] = Form.useForm()
// const [isModalOpen, setIsModalOpen] = useState(false);
// const showModal = () => {
//   setIsModalOpen(true);
// };
// const handleOk = () => {
//   setIsModalOpen(false);
// };
// const handleCancel = () => {
//   setIsModalOpen(false);
// };

// const modalConfig = {
//   title: '填写反馈',
//   width: 600,
//   open: isModalOpen,
//   onOk: handleOk,
//   onCancel: handleCancel,
//   okText: '确认',
//   cancelText: '取消'
// }

const EditalModal = (props) => {
  const { modalConfig } = props
  const [isShow, setIsShow] = useState(false)
  const [items, setItems] = useState(['jack', 'lucy']);
  const [name, setName] = useState('');
  const [defaultData, setDefaultData] = useState(defaultObj)
  const inputRef = useRef(null);
  const addFunc = useRef(null)
  const onNameChange = (event) => {
    setName(event.target.value);
    setIsShow(false)
  };
  const addItem = (e) => {
    e.preventDefault();
    setItems([...items, name || `New item ${index++}`]);
    setName('');
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };


  const handleAdd = () => {
    setIsShow(true)
  }

  const handleSelected = (val) => {
    console.log('val----', val);
    console.log('addFunc----', addFunc);
    addFunc.current()
    setIsShow(false)
  }

  return (
    <>
      <Modal {...modalConfig}>
      <Form
      name="basic"
      layout='vertical'
      autoComplete="off"
      initialValues={defaultData}
    >
      <Form.Item valuePropName="checked" >
      <div style={switchStyle}>     
      <div><span style={requiredStyel}>*</span>是否接受本次合作需求？</div>
       <Switch checkedChildren="已接收" unCheckedChildren="拒绝"/>
      </div>
    </Form.Item>

    <Form.Item valuePropName="hzdq" >
      <Row>
        <Col span={10}>
          <div>合作档期</div>
          <div>8月18日-8月28日之间</div>
        </Col>
        <Col span={10} offset={4}>
        <Select options={[
              {
                value: '1',
                label: '档期符合',
              },
              {
                value: '2',
                label: '档期不符合',
              },   
            ]}
          />
        </Col>
      </Row>   
    </Form.Item>

    <Row>
      <Col span={10}>
      <Form.Item 
        label='合作模式'
        name='hzms'

        rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        valuePropName="checked" >
        <Select options={[
              {
                value: '1',
                label: '档期符合',
              },
              {
                value: '2',
                label: '档期不符合',
              },   
            ]}
          />
    </Form.Item>
      </Col>
      <Col span={10} offset={4}>
      <Form.Item 
        label='合作报价'
        name='hzbj'
        rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        valuePropName="checked" >
        <InputNumber style={{width: '100%'}} addonAfter="元"/>
    </Form.Item>
      </Col>
    </Row>
    <div>可配合权益</div>
    <div>以下为合作报价外单个权益项的报价</div>
   
    <Form.List
        name="list">
        {(fields, { add, remove }, { errors }) => {
          return (
            <>
              {fields.map((field, index) => (
                <>
                  <Row style={{...flexStyle, alignItems: 'flex-end'}}>
                      <Col span={14}>
                      <Form.Item 
                        label='同步分发至达人其他平台账号'
                        name='tbfs'

                        rules={[
                            {
                              required: true,
                              message: 'Please input your username!',
                            },
                          ]}
                        valuePropName="checked" >
                        <Select options={[
                              {
                                value: '1',
                                label: '接受',
                              },
                              {
                                value: '2',
                                label: '拒绝',
                              },   
                            ]}
                          />
                    </Form.Item>
                      </Col>
                      <Col span={9}>
                      <Form.Item 
                        name='hzbj'
                        rules={[
                            {
                              required: true,
                              message: 'Please input your username!',
                            },
                          ]}
                        valuePropName="checked" >
                        <InputNumber style={{width: '100%'}} addonAfter="元"/>
                    </Form.Item>
                      </Col>
                    </Row>
                </>
              ))}
              <Form.Item>
                <Form.ErrorList errors={errors} />
              </Form.Item>
            </>
          );
        }}
      </Form.List>

      <Form.List
        name="addList">
        {(fields, { add, remove }, { errors }) => {
          addFunc.current = add
          return (
            <>
              {fields.map((field, index) => (
                <>
                  <div style={{...flexStyle}}>
                      <span>长期合作</span>
                      <DeleteOutlined style={{color: 'red'}} onClick={() => remove(field.name)}/>
                    </div>
                    <div style={{marginBottom: '10px'}}>
                    <InputNumber style={{width: '100%'}} addonAfter="元"/>
                    </div>
                
                </>
              ))}
              <Form.Item>
                <Form.ErrorList errors={errors} />
              </Form.Item>
              
            </>
          );
        }}
      </Form.List>
      <div><PlusOutlined  onClick={handleAdd}/>添加可配合权益</div>
                    {
                      isShow  && <Select
                      style={{
                        width: '80%',
                      }}
                      onChange={handleSelected}
                      dropdownRender={(menu) => (
                        <>
                          {menu}
                          <Divider
                            style={{
                              margin: '8px 0',
                            }}
                          />
                          <Space
                            style={{
                              padding: '0 8px 4px',
                            }}
                          >
                            <Input
                              ref={inputRef}
                              value={name}
                              onChange={onNameChange}
                            />
                            <Button type="text" icon={<PlusOutlined />} onClick={addItem}>
                              添加自定义权益项
                            </Button>
                          </Space>
                        </>
                      )}
                      options={items.map((item) => ({
                        label: item,
                        value: item,
                      }))}
                    />
                    }
      <Form.Item name={['user', 'introduction']} label="说明" style={{marginTop: '50px'}}>
        <Input.TextArea />
      </Form.Item>
    </Form>
      </Modal>
     
    </>
  )
}

export default EditalModal

