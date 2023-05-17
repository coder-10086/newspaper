import { LockOutlined, UserOutlined, WhatsAppOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { useState } from 'react';
import styles from '@/styles/Login.module.css'
import utilsStyles from '@/styles/utils.module.css'

const Login: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  const [isMoved, setIsMoved] = useState(false)

  const handleMoved = () => {
    setIsMoved(!isMoved)
  }

  return (
    <div className={`${styles.glass_container} ${isMoved ? styles.position_up : styles.position_down}`}>
       <Form
          name="normal_login"
          className={`${styles.form_register} ${isMoved ? styles.register_active : ''}`}
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
          name="username"
          className={utilsStyles.flex_center_horizontal}
        rules={[{ required: true, message: '请输入用户名 !' }]}
      >
        <Input
          className={styles.input_style}
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="用户名"
        />
        </Form.Item>
        
      <Form.Item
          name="password"
          className={utilsStyles.flex_center_horizontal}
        rules={[{ required: true, message: '请输入密码 !' }]}
      >
        <Input
          className={styles.input_style}
          prefix={<WhatsAppOutlined className="site-form-item-icon"/>}
          placeholder="手机号码"
        />
      </Form.Item>

      <Form.Item
          name="password"
          className={utilsStyles.flex_center_horizontal}
        rules={[{ required: true, message: '请输入密码 !' }]}
      >
        <Input
          className={styles.input_style}
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="密码"
        />
      </Form.Item>

      <Form.Item className={utilsStyles.flex_center_horizontal}>
        <Button
          type="primary"
          htmlType="submit"
          className={styles.submit_style}>
          注册
        </Button>
      </Form.Item>

      <Form.Item className={utilsStyles.flex_center_horizontal}>
        <div>
            <a className={utilsStyles.color_white} onClick={handleMoved}>
              返回登录
            </a>
        </div>
      </Form.Item>
    </Form>
      <Form
          name="normal_login"
          className={`${styles.form_login} ${isMoved ? styles.login_active : ''}`}
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
          name="username"
          className={utilsStyles.flex_center_horizontal}
        rules={[{ required: true, message: '请输入用户名 !' }]}
      >
        <Input
          className={styles.input_style}
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="用户名"
        />
      </Form.Item>

      <Form.Item
          name="password"
          className={utilsStyles.flex_center_horizontal}
        rules={[{ required: true, message: '请输入密码 !' }]}
      >
        <Input
          className={styles.input_style}
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="密码"
        />
      </Form.Item>

      <Form.Item className={utilsStyles.flex_center_horizontal}>
        <Button
          type="primary"
          htmlType="submit"
          className={styles.submit_style}>
          登录
        </Button>
      </Form.Item>

      <Form.Item>
        <div className={styles.checkbox_box}>
          <Checkbox className={utilsStyles.color_white}>记住密码</Checkbox>
          <a className={utilsStyles.color_white} href="">
          忘记密码
          </a>
        </div>
      </Form.Item>

      <Form.Item className={utilsStyles.flex_center_horizontal}>
        <div>
            <a className={utilsStyles.color_white} onClick={handleMoved}>
              创建账号
            </a>
        </div>
      </Form.Item>
      </Form>
      </div>
  );
};

export default Login