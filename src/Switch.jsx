import React from "react";
import { Divider, Space, Switch } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

export default function SwitchONOFF() {
    return (
        <>
            <Divider style={{ marginBottom: '10px', color: 'red', borderColor:"red"}}>Switch</Divider>
            <Space direction="vertical">
                <Switch />
                <Switch checkedChildren="ON" unCheckedChildren="OFF" />
                <Switch checkedChildren={<CheckOutlined/>} unCheckedChildren={<CloseOutlined/>} />
            </Space>
        </>
    )
}