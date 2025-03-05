import React, { useState } from "react";
import { Space, Divider, Typography} from "antd";

export default function Typing() {

    const [text, setText] = useState('hello world!');
    return (
        <>
            <Divider style={{ marginBottom: '10px', color: 'red', borderColor:"red"}}>Typography</Divider>
            <Space direction="vertical">
                <Typography.Title>hello world!</Typography.Title>
                <Typography.Title level={3}>hello world!</Typography.Title>
                <Typography.Text strong>hello world</Typography.Text>
                <Typography.Text underline>hello world</Typography.Text>
                <Typography.Text type="success">hello world</Typography.Text>
                <Typography.Paragraph copyable >hello world</Typography.Paragraph>
                <Typography.Paragraph editable={{
                    onChange:(value) => {
                        setText(value);
                    },
                    triggerType: 'icon|text',
                    tooltip: 'click to edit',
                }}>{text}</Typography.Paragraph>
                <Typography.Paragraph
                    style={{
                        width:'100px'
                    }}
                    ellipsis={{
                        rows: 2,
                        expandable: true,
                        symbol: 'show more',
                    }}
                >hello world, hello world, hello world, hello world, hello world, hello world, hello world, hello world</Typography.Paragraph>
            </Space>

        </>
    )
}