import { useState, useRef, useEffect } from 'react'
import {
  Button,
  Modal,
  Form,
  InputNumber,
  Divider,
  Switch,
  Row,
  Col,
  Select,
  Space,
  Input,
} from 'antd'
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons'

const switchStyle = {
  with: '100%',
  padding: '15px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderRadius: '5px',
  backgroundColor: '#e3e4ea',
}

const requiredStyel = {
  color: '#ff4d4f',
  fontFamily: 'SimSun,sans-serif',
  fontSize: '16px',
}

const flexStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}

let index = 0

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
const arr = [
  { text: '不可删除视频', code: 1 },
  { text: '配合评论管理', code: 2 },
  { text: '配合修改素材', code: 3 },
]
let defaultObj = {
  isChoose: '已接收',
  dqsffh: '1',
  hzmsbj: 88,
  list: [{ label: '不可删除视频', code: 1, isAllow: '1', price: 33 }, {}, {}],
  addList: [{}],
}

const FormItem = (props) => {
  const { textLable, texTname, moneyName } = props
  const [status, setStatus] = useState(false) // true: 拒绝 false: 接受
  const handleChange = (val) => {
    setStatus(val === '2')
  }
  return (
    <>
      <Row style={{ ...flexStyle, alignItems: 'flex-end' }}>
        <Col span={14}>
          <Form.Item
            label={textLable}
            name={texTname}
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}>
            <Select
              options={[
                {
                  value: '1',
                  label: '接受',
                },
                {
                  value: '2',
                  label: '拒绝',
                },
              ]}
              onChange={handleChange}
            />
          </Form.Item>
        </Col>
        <Col span={9}>
          <Form.Item
            name={moneyName}
            rules={[
              {
                required: !status,
                message: 'Please input your username!',
              },
            ]}>
            <InputNumber disabled={status} style={{ width: '100%' }} addonAfter="元" />
          </Form.Item>
        </Col>
      </Row>
    </>
  )
}

const EditalModal = (props) => {
  const { modalConfig, form } = props
  const [isShow, setIsShow] = useState(false)
  const [items, setItems] = useState(['jack', 'lucy'])
  const [name, setName] = useState('')
  const inputRef = useRef(null)
  const addFunc = useRef(null)
  const onNameChange = (event) => {
    setName(event.target.value)
    setIsShow(false)
  }

  useEffect(() => {
    form.setFieldValue(defaultObj)
  }, [])

  const addItem = (e) => {
    e.preventDefault()
    setItems([...items, name || `New item ${index++}`])
    setName('')
    setTimeout(() => {
      inputRef.current?.focus()
    }, 0)
  }

  const handleAdd = () => {
    setIsShow(true)
  }

  const handleSelected = (val) => {
    console.log('val----', val)
    console.log('addFunc----', addFunc)
    addFunc.current()
    setIsShow(false)
  }

  return (
    <>
      <Modal {...modalConfig}>
        <Form form={form} layout="vertical" autoComplete="off">
          <Form.Item name="isChoose" valuePropName="checked">
            <div style={switchStyle}>
              <div>
                <span style={requiredStyel}>*</span>是否接受本次合作需求？
              </div>
              <Switch checkedChildren="已接收" unCheckedChildren="拒绝" />
            </div>
          </Form.Item>

          <Row>
            <Col span={10}>
              <div>合作档期</div>
              <div>8月18日-8月28日之间</div>
            </Col>
            <Col span={10} offset={4}>
              <Form.Item name="dqsffh">
                <Select
                  options={[
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
          </Row>

          <Row>
            <Col span={10}>
              <Form.Item
                label="合作模式"
                name="hzms"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}>
                <Select
                  options={[
                    {
                      value: '1',
                      label: '合作模式1',
                    },
                    {
                      value: '2',
                      label: '合作模式2',
                    },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col span={10} offset={4}>
              <Form.Item
                label="合作报价"
                name="hzmsbj"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}>
                <InputNumber style={{ width: '100%' }} addonAfter="元" />
              </Form.Item>
            </Col>
          </Row>
          <div>可配合权益</div>
          <div>以下为合作报价外单个权益项的报价</div>
          {arr.map((item, index) => {
            return (
              <>
                <FormItem textLable={item.text} texTname={item.text} moneyName={item.code} />
              </>
            )
          })}

          <Form.List name="addList">
            {(fields, { add, remove }, { errors }) => {
              addFunc.current = add
              console.log('fields--', fields)
              return (
                <>
                  {fields.map((field, index) => (
                    <>
                      <div style={{ ...flexStyle }}>
                        <span>长期合作</span>
                        <DeleteOutlined
                          style={{ color: 'red' }}
                          onClick={() => remove(field.name)}
                        />
                      </div>
                      <div style={{ marginBottom: '10px' }}>
                        <Form.Item
                          name={[field.name, 'name']}
                          rules={[
                            {
                              required: true,
                              message: 'Please input your username!',
                            },
                          ]}>
                          <InputNumber style={{ width: '100%' }} addonAfter="元" />
                        </Form.Item>
                      </div>
                    </>
                  ))}
                  <Form.Item>
                    <Form.ErrorList errors={errors} />
                  </Form.Item>
                </>
              )
            }}
          </Form.List>
          <div>
            <PlusOutlined onClick={handleAdd} />
            添加可配合权益
          </div>
          {isShow && (
            <Select
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
                    }}>
                    <Input ref={inputRef} value={name} onChange={onNameChange} />
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
          )}
          <Form.Item name={['user', 'introduction']} label="说明" style={{ marginTop: '50px' }}>
            <Input.TextArea />
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default EditalModal
