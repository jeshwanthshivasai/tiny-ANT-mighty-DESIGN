import React from "react";
import { Divider, Avatar, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";

export default function Avatars() {
    return (
        <>
            <Divider style={{ marginBottom: '10px', color: 'red', borderColor:"red"}}>Avatar</Divider>
            <Space direction="vertical">
                <Avatar>JSS</Avatar>
                <Avatar shape="square" style={{backgroundColor: 'blueviolet'}}>JSS</Avatar>
                <Avatar shape="square" style={{backgroundColor: 'blueviolet'}}><UserOutlined /></Avatar>
                <Avatar shape="square" style={{backgroundColor: 'blueviolet'}} src={'https://avatars.githubusercontent.com/u/63970360?v=4'} />
                <Avatar.Group>
                    <Avatar>JSS</Avatar>
                    <Avatar shape="square" style={{backgroundColor: 'blueviolet'}}>JSS</Avatar>
                    <Avatar shape="square" style={{backgroundColor: 'blueviolet'}}><UserOutlined /></Avatar>
                    <Avatar shape="square" style={{backgroundColor: 'blueviolet'}} src={'https://avatars.githubusercontent.com/u/63970360?v=4'} />
                </Avatar.Group>
                <Avatar.Group maxCount={2}>
                    <Avatar>JSS</Avatar>
                    <Avatar shape="square" style={{backgroundColor: 'blueviolet'}}>JSS</Avatar>
                    <Avatar shape="square" style={{backgroundColor: 'blueviolet'}}><UserOutlined /></Avatar>
                    <Avatar shape="square" style={{backgroundColor: 'blueviolet'}} src={'https://avatars.githubusercontent.com/u/63970360?v=4'} />
                </Avatar.Group>
            </Space>
        </>
    )
}