import React from "react";
import { Badge, Image, Space, Typography } from "antd";
import { BellOutlined, MailOutlined} from "@ant-design/icons";

export default function Header() {
    return (
        <>
            <div className="Header">
                <Typography.Title style={{fontSize: "20px", color: 'white'}}>Welcome Vardhaman Special Steels Ltd</Typography.Title>
                <Space>
                    <Badge count={10} dot>
                        <MailOutlined style={{fontSize: 25, color: 'white'}} />
                    </Badge>
                    <Badge count={20}>
                        <BellOutlined style={{fontSize: 25, color: 'white'}} />
                    </Badge>
                </Space>
            </div>
        </>
    )
}