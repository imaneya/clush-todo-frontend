import React, { useState } from 'react';
import { Layout, Typography, Button, Checkbox, Form, Input, Space, Row, Col } from 'antd';
import { Link } from "react-router-dom";
import '../index.css';
const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;

const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 100,
    paddingInline: 80,
    lineHeight: '64px',
    backgroundColor: '#fff',
  };
  const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    backgroundColor: '#fff',
  };
  const layoutStyle = {
    overflow: 'hidden',
    width: '100%',
    maxWidth: '100%',
    backgroundColor: '#fff',
  };

const Login = ({ signIn, authUser }) => {
    const [formData, setFormData] = useState({
        userId: '',
        password: ''
    });

    const onFinish = () => {
        signIn(formData);
    };

    if (authUser) {
        window.location.href = '/';
        return null; // 로그인된 경우에는 컴포넌트를 렌더링하지 않음
    }

    return (
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
            onPressEnter={onFinish}
            autoComplete="off"
        >
            <Layout style={layoutStyle}>
                <Header style={headerStyle}><Title level={2} style={{ verticalAlign: 'middle' }}>Login</Title>
                </Header>
            </Layout>
            <Form.Item
                label="ID"
                name="id"
                wrapperCol={{
                    offset: 0,
                    span: 16,
                }}
                rules={[
                  {
                    required: true,
                    message: 'Please input your ID!',
                  },
                ]}    
            >
                <Input
                    type="text"
                    name="id"
                    placeholder="ID"
                    value={formData.userId}
                    onChange={(e) => setFormData(oldData => ({ ...oldData, userId: e.target.value }))}
                />
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
                wrapperCol={{
                    offset: 0,
                    span: 14,
                }}
                rules={[
                {
                    required: true,
                    message: 'Please input your Password!',
                },
                ]}
            >
                <Input.Password
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) => setFormData(oldData => ({ ...oldData, password: e.target.value }))}
                />
            </Form.Item>
            <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                    offset: 7,
                    span: 16,
                }}
            >
                <Row gutter={[16, 16]}>
                    <Col span={8}>
                    <Link to="/join">
                        <Button>
                            <p>Join</p>
                        </Button>
                    </Link>
                    </Col>
                    <Col span={8}>
                        <Button type="primary" onClick={onFinish}>Login</Button>
                    </Col>
                </Row>
            </Form.Item>
        </Form>
    );
};

export default Login;
