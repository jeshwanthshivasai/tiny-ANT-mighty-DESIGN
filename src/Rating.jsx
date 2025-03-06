import React from "react";
import { Divider, Rate, Space } from "antd";
import { FrownOutlined, HeartFilled, MehOutlined, SmileOutlined } from "@ant-design/icons";

const smileyRating = [
    <FrownOutlined/>,
    <MehOutlined />,
    <SmileOutlined/>
]

export default function RateRating() {
    return (
        <>
            <Divider style={{ marginBottom: '10px', color: 'red', borderColor:"red"}}>Rating</Divider>
            <Space direction="vertical">
                <Rate />
                <Rate allowHalf allowClear={true}/>
                <Rate defaultValue={3} character={<HeartFilled/>}/>
                <Rate allowHalf defaultValue={3} tooltips={["Bad", "Normal", "Good"]}/>
                <Rate style={{ color: 'green'}}/>
                <Rate style={{ color: 'green'}} character={({ index }) => {
                    return index + 1;
                }} allowHalf />
                <Rate character={({ index }) => {
                    return smileyRating[index];
                }} onChange={(value) => {
                    console.log("You read as ", value, " stars");
                }} />
            </Space>
        </>
    )
}