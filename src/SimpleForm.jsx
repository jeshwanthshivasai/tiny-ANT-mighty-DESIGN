import React from "react";
import { Form, Input, Button, Divider } from "antd";

export default function SimpleForm() {
    const onFinish = (e) => {
        console.log(e);
    }
    return (
        <>
            <Divider style={{ marginBottom: '10px', color: 'red', borderColor:"red"}}>Basic Form</Divider>
            <Form onFinish={onFinish}>
                <Form.Item label="username" name="username">
                    <Input placeholder="enter username" required></Input>
                </Form.Item>
                <Form.Item label="password" name="password">
                    <Input.Password placeholder="enter password" required></Input.Password>
                </Form.Item>
                <Form.Item>
                    <Button block type="primary" htmlType="submit"></Button>
                </Form.Item>
            </Form>
        </>
    )
}