import React from "react";
import { Select, Divider } from "antd";

export default function Selection() {
    const apple = ['iphone', 'iwatch', 'ipad', 'airpods', 'macbook'];

    return (
        <>
            <Divider style={{ marginBottom: '10px', color: 'red', borderColor:"red"}}>Optional Selection</Divider>
            <h3>Please choose your favourite 🍎 product</h3>
            <h6>{`works when >=5.11.0, recommended ✅`}</h6>
            <Select placeholder='please choose...' mode="multiple" allowClear maxTagCount={2} style={{width:'100%'}} options={apple.map((product => ({
                value:product, label:<span>{product}</span>
            })))} />

            <h6>{`works when <5.11.0, deprecated when >=5.11.0 🙅🏻‍♀️`}</h6>
            <Select  placeholder='please choose...' style={{width:'100%'}}>
                {apple.map((product, index) => {
                    return <Select.Option key={index} value={product}>{product}</Select.Option>
                })};
            </Select>
        </>
    );
}
