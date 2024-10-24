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

const Join = ({signUp}) => {
    const [formData, setFormData] = useState({
        userId: '',
        password: ''
    });

    const onFinish = () => {
        signUp(formData);
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
            autoComplete="off"
        >
            <Layout style={layoutStyle}>
                <Header style={headerStyle}><Title level={2} style={{ verticalAlign: 'middle' }}>Join</Title>
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
                    <Link to="/login">
                        <Button>
                            <p>Login</p>
                        </Button>
                    </Link>
                    </Col>
                    <Col span={8}>
                        <Button type="primary" onClick={onFinish}>Join</Button>
                    </Col>
                </Row>
            </Form.Item>
        </Form>
    );
};

export default Join;