import React from "react";
import { Space, Input, Divider, Progress, Slider, Button, DatePicker, Spin } from "antd";

export default function AntTheming() {
    return (
        <>
            <Divider style={{ marginBottom: '10px', color: 'red', borderColor:"red"}}>Ant Theming</Divider>
            <Space direction="vertical">
                <Button type="primary">Hello</Button>
                <Progress percent={33} />
                <Spin loading />
                <Slider />
                <DatePicker />
                <Input autoFocus placeholder="Type here..." />
            </Space>
        </>
    )
}