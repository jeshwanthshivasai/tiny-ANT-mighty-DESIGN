import React from "react";
import { Button, Divider } from "antd";
import { Link } from "react-router";

export default function MATNEXT() {
    return (
        <>
            <Divider style={{ marginBottom: '10px', color: 'red', borderColor:"red"}}>MATNEXT</Divider>
            <Link to="/admindashboard">
                <Button style={{marginTop: '10px'}}>GO TO MATNEXT</Button>
            </Link>
        </>
    )
}