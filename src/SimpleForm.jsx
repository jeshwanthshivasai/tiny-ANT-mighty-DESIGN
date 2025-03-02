import React, { useState } from "react";
import { Form, Input, Button, Divider, message, Alert } from "antd";

export default function SimpleForm() {
    const [loginSuccess, setLoginSuccess] = useState(false);
    const onFinish = (e) => {
        console.log(e);
        setTimeout(() => {
            setLoginSuccess(true);
            message.success('Login Successful!');
        }, 2000)
    }
    return (
        <>
            <Divider style={{ marginBottom: '10px', color: 'red', borderColor:"red"}}>Basic Form</Divider>
            {loginSuccess && <Alert type="error" message="Error" description="There was an error on login" closable/>}
            <Form onFinish={onFinish}>
                <Form.Item label="username" name="username">
                    <Input placeholder="enter username" required></Input>
                </Form.Item>
                <Form.Item label="password" name="password">
                    <Input.Password placeholder="enter password" required></Input.Password>
                </Form.Item>
                <Form.Item>
                    <Button block type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>
        </>
    )
}