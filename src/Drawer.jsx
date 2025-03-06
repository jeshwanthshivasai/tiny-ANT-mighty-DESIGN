import React, { useState } from "react";
import { Button, Divider, Drawer } from "antd";

export default function DrawDrawer() {
    const [visible, setVisible] = useState(false);
    return (
        <>
            <Divider style={{ marginBottom: '10px', color: 'red', borderColor:"red"}}>Drawer</Divider>
            <Button onClick={() => {setVisible(true)}}>Open Drawer</Button>
            <Drawer onClose={() => {setVisible(false)}} open={visible} closable={true} title="Drawer Title">
                <p>This is the content of the drawer</p>
            </Drawer>
        </>
    )
}