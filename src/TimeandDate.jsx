import React from "react";
import { DatePicker, TimePicker, Divider } from "antd";

export default function TimeandDatePicking() {
    return (
        <>
            <Divider style={{ marginBottom: '10px', color: 'red', borderColor:"red"}}>Date and Time</Divider>
            <h6>Date Picker</h6>
            <DatePicker />
            <h6>Date Picker with Month Picker</h6>
            <DatePicker.MonthPicker />
            <h6>Date Picker with Month Quarter Picker</h6>
            <DatePicker.QuarterPicker />
            <h6>Date Picker with Month Range Picker</h6>
            <DatePicker.RangePicker />
            <h6>Date Picker with Time Picker</h6>
            <DatePicker.TimePicker />
            <h6>Date Picker with Week Picker</h6>
            <DatePicker.WeekPicker />
            <h6>Date Picker with Year Picker</h6>
            <DatePicker.YearPicker />
            <h6>Time Picker</h6>
            <TimePicker/>
        </>
    )
}