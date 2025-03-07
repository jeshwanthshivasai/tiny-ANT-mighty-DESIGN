import React, { useState } from "react";
import { Button, Divider, Space } from "antd";

export default function Buttons() {
    const [loading, setLoading] = useState(false);
    const onButtonClick = (e) => {
        console.log("Button has been clicked");
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }
    return (
        <>
            <Divider style={{ marginBottom: '10px', color: 'red', borderColor:"red"}}>Button Variants</Divider>
            <Space>
                <Button type="primary" block onClick={onButtonClick} loading={loading}>Submit</Button>
                <Button type="dashed" danger block onClick={onButtonClick} loading={loading}>Submit</Button>
                <Button variant="outlined" block color="pink" onClick={onButtonClick} loading={loading}>Submit</Button>
                <Button variant="filled" block color='cyan' onClick={onButtonClick} loading={loading}>Submit</Button>
            </Space>
        </>
    )
}
