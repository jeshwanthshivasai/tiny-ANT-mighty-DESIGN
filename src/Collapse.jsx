import React from "react";
import { Divider, Collapse, Typography, Button } from "antd";
import { CaretRightFilled } from "@ant-design/icons";

export default function Collapsing() {
    return (
        <>
            <Divider style={{ marginBottom: '10px', color: 'red', borderColor:"red"}}>Collapse</Divider>
            <Collapse expandIcon={({isActive}) => {
                return <CaretRightFilled rotate={isActive ? '90' : '0'} />
            }}>
                <Collapse.Panel header="This is Panel 1">
                    <Typography.Text>This is the content inside the panel</Typography.Text>
                </Collapse.Panel>
                <Collapse.Panel extra={<Button>Download</Button>} header="This is Panel 1">
                    <Typography.Text>This is the content inside the panel</Typography.Text>
                </Collapse.Panel>
            </Collapse>
        </>
    )
}