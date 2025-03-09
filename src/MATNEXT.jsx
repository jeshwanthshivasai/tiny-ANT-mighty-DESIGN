import React from "react";
import { Button, Divider } from "antd";
import { Link, useNavigate } from "react-router-dom";

export default function MATNEXT() {
    const navigate = useNavigate();
    return (
        <>
            <Divider style={{ marginBottom: '10px', color: 'red', borderColor:"red"}}>MATNEXT</Divider>
            <Button onClick={() => navigate("/admin-dashboard")} style={{marginTop: '10px'}}>GO TO MATNEXT</Button>
        </>
    )
}