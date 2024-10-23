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
    <Title level={2}>DB Info</Title>
    <Form.Item
      label="DB ID"
      name="dbid"
      rules={[
        {
          required: true,
          message: 'Please input your DB ID!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="DB Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your DB Password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      label="DB Name"
      name="name"
      rules={[
        {
          required: true,
          message: 'Please input your DB Name!',
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
      <Col span={4}>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Col>
    </Form.Item>
  </Form>
);
export default Login;