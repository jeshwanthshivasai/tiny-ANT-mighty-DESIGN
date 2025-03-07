import React from "react";
import { Badge, Image, Space, Typography } from "antd";
import { BellOutlined, MailOutlined} from "@ant-design/icons";

export default function Header() {
    return (
        <>
            <div className="Header">
                <Typography.Title style={{fontSize: "20px"}}>Welcome Vardhaman Special Steels Ltd</Typography.Title>
                <Space>
                    <Badge count={10} dot>
                        <MailOutlined style={{fontSize: 25}} />
                    </Badge>
                    <Badge count={20}>
                        <BellOutlined style={{fontSize: 25}} />
                    </Badge>
                </Space>
            </div>
        </>
    )
}