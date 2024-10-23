import React from 'react';
import { Typography, Button, Checkbox, Form, Input, Space, Row, Col } from 'antd';
import { Link } from "react-router-dom";

const { Title } = Typography;

const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const Login = () => (
  <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Title level={2}>Login</Title>
    <Form.Item
      label="ID"
      name="id"
      rules={[
        {
          required: true,
          message: 'Please input your ID!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your Password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      {/* <Checkbox>Remember me</Checkbox> */}
    </Form.Item>
    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Link to="/join">
            <Button>
                <p>Join</p>
            </Button>
          </Link>
        </Col>
        <Col span={4}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Col>
      </Row>
    </Form.Item>
  </Form>
);
export default Login;