import React from "react";
import { Divider, AutoComplete } from "antd";

export default function AutomaticComplete() {

    const options = [
        {
            label: 'One',
            value: 'One'
        },
        {
            label: 'Two',
            value: 'Two'
        },
        {
            label: 'Three',
            value: 'Three'
        },
        {
            label: 'Four',
            value: 'Four'
        },
        {
            label: 'Five',
            value: 'Five'
        },
    ]
    return (
        <>
            <Divider style={{ marginBottom: '10px', color: 'red', borderColor:"red"}}>Auto-Complete</Divider>
            <AutoComplete filterOption={true} style={{width: 200}} placeholder="Type here for check the auto-complete" options={options} />
        </>
    )
}