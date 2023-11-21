import React from 'react'
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
import { PlusOutlined, DeleteOutlined, CheckOutlined } from '@ant-design/icons'

import './src/index.css'

const HistoryModal = (props) => {
  const { modalConfig } = props
  return (
    <>
      <Modal {...modalConfig}>
        <div>
          $MCN名称
          对达人信息有更新，请选择是否对信息进行更新，若选择更新，新的信息会同步更新到内容策划和营销页面中
        </div>
        <Row justify="space-around" align="middle">
          <Col span={11} className="card-style">
            <div className="head">
              <div>历史信息</div>
              <div>
                <span className="bold-style">
                  <CheckOutlined style={{ color: 'blue' }} />
                  已接受
                </span>
                <span>本次合作需求</span>
              </div>
            </div>
            <Row justify="space-between" align="bottom" className="item-style">
              <Col span={12}>
                <div>合作档期</div>
                <div>2023-10-11</div>
              </Col>
              <Col span={12}>
                <div>档期符合</div>
              </Col>
            </Row>
            <Row justify="space-between" align="bottom" className="item-style">
              <Col span={12}>
                <div>合作模式</div>
                <div>星图60s以上</div>
              </Col>
              <Col span={12}>
                <div>合作报价</div>
                <div>333333</div>
              </Col>
            </Row>
            <Row justify="space-between" align="bottom" className="item-style">
              <Col span={24}>
                <div>可配合权益</div>
                <div>以下为合作报价外单个权益项的报价</div>
              </Col>
            </Row>
            <Row justify="space-between" align="bottom" className="item-style">
              <Col span={10}>
                <div>允许我方投放dou+</div>
                <div>不接受</div>
              </Col>
              <Col span={8}>33333</Col>
              <Col span={6}>元</Col>
            </Row>
            <Row justify="space-between" align="bottom" className="item-style">
              <Col span={24}>
                <div>说明</div>
                <div>说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字</div>
              </Col>
            </Row>
          </Col>
          <Col span={11} className="card-style">
            <div className="head">
              <div>更新信息</div>
              <div>
                <span className="bold-style">
                  <CheckOutlined style={{ color: 'blue' }} />
                  已接受
                </span>
                <span>本次合作需求</span>
              </div>
            </div>
            <Row justify="space-between" align="bottom" className="item-style">
              <Col span={12}>
                <div>合作档期</div>
                <div>2023-10-11</div>
              </Col>
              <Col span={12}>
                <div>档期不符</div>
              </Col>
            </Row>
            <Row justify="space-between" align="bottom" className="item-style">
              <Col span={12}>
                <div>合作模式</div>
                <div>星图60s以上</div>
              </Col>
              <Col span={12}>
                <div>合作报价</div>
                <div>333333</div>
              </Col>
            </Row>
            <Row justify="space-between" align="bottom" className="item-style">
              <Col span={24}>
                <div>可配合权益</div>
                <div>以下为合作报价外单个权益项的报价</div>
              </Col>
            </Row>
            <Row justify="space-between" align="bottom" className="item-style">
              <Col span={10}>
                <div>允许我方投放dou+</div>
                <div>不接受</div>
              </Col>
              <Col span={8}>33333</Col>
              <Col span={6}>元</Col>
            </Row>
            <Row justify="space-between" align="bottom" className="item-style">
              <Col span={24}>
                <div>说明</div>
                <div>说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字</div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Modal>
    </>
  )
}

export default HistoryModal
