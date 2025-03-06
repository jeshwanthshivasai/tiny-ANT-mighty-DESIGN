import React from "react";
import { Divider, Calendar } from "antd";

export default function CCalendar() {
    return (
        <>
            <Divider style={{ marginBottom: '10px', color: 'red', borderColor:"red"}}>Calendar</Divider>
            <Calendar />
        </>
    )
}