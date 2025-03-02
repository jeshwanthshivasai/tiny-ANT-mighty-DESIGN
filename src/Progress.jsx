import React from "react";
import { Progress, Divider } from "antd";

export default function ProgressBars() {
    return (
        <>
            <Divider style={{ marginBottom: '10px', color: 'red', borderColor:"red"}}>Button Variants</Divider>
            <Progress percent={33} type="line" strokeWidth={15} status="active" />
            <Progress percent={33} type="line" strokeWidth={15} status="success" />
            <Progress percent={33} type="line" strokeWidth={15} status="exception" />
            <Progress percent={33} type="line" strokeColor='black' trailColor="grey"/>
            <Progress percent={33} type="circle" strokeWidth={15} />
            <Progress percent={33} type="circle" strokeWidth={15} status="success" />
            <Progress percent={33} type="circle" strokeWidth={15} status="exception" />
            <Progress percent={33} type="dashboard" strokeWidth={15} status="active" />
        </>
    )
}