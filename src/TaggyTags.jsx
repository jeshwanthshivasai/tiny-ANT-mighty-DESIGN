import React from "react";
import { Button, Divider, Tag } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

export default function TaggyTags() {
    return (
        <>
            <Divider style={{ marginBottom: '10px', color: 'red', borderColor:"red"}}>Tags</Divider>
            <Tag>Tag 1</Tag>
            <Tag color="magenta">Tag 2</Tag>

            <Tag color="error" closable closeIcon={<Button danger style={{color:'red'}} type="text">X</Button>}>Error</Tag>
            <Tag color="error" closable closeIcon={<DeleteOutlined />}>Custom Remove Icon</Tag>
            <Tag color="#f0f" closable onClose={()=>{
                console.log('Tag is closed')
            }}>Tag 4</Tag>
            <Tag
            style={{
                backgroundColor: 'goldenrod',
                color:'red',
                border: 'blue',
                borderRadius: 10,
                borderWidth: 10
            }} 
            closable onClose={()=>{
                console.log('Tag is closed')
            }}>Tag 5</Tag>
        </>
    )
}