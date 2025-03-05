import React, { useState } from "react";
import { Divider, Space, Steps } from "antd";

const {Step} = Steps;

export default function TaskProgress() {

    const [current, setCurrent] = useState(1)
    return (
        <>
            <Divider style={{ marginBottom: '10px', color: 'red', borderColor:"red"}}>Task Progress</Divider>
            <Space direction="vertical">
            <Steps>
                <Step title="Finished"></Step>
                <Step title="In Progress"></Step>
                <Step title="Waiting"></Step>
            </Steps>
            <Steps percent={60} current={current} labelPlacement="vertical" onChange={(c) => {setCurrent(c)}}>
                <Step title="Finished"></Step>
                <Step title="In Progress"></Step>
                <Step title="Waiting"></Step>
            </Steps>
            <Steps direction="vertical" progressDot current={current} labelPlacement="vertical" onChange={(c) => {setCurrent(c)}}>
                <Step title="Finished"></Step>
                <Step title="In Progress" subTitle="2 Min"></Step>
                <Step title="Waiting" status="error" ></Step>
            </Steps>
            </Space>
        </>
    )
}