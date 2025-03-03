import React from "react";
import { Divider } from "antd";
import Icon, {AppleFilled, AppleOutlined, EyeFilled, EyeTwoTone, Loading3QuartersOutlined, LoadingOutlined } from "@ant-design/icons";

export default function AntIcons() {
    const Heart = (props) => {
        return <Icon
        component = {() => {
            return (
                <svg width="50px" height="50px" viewBox="0 0 50 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M25 39.7l-.6-.5C11.5 28.7 8 25 8 19c0-5 4-9 9-9 4.1 0 6.4 2.3 8 4.1 1.6-1.8 3.9-4.1 8-4.1 5 0 9 4 9 9 0 6-3.5 9.7-16.4 20.2l-.6.5zM17 12c-3.9 0-7 3.1-7 7 0 5.1 3.2 8.5 15 18.1 11.8-9.6 15-13 15-18.1 0-3.9-3.1-7-7-7-3.5 0-5.4 2.1-6.9 3.8L25 17.1l-1.1-1.3C22.4 14.1 20.5 12 17 12z"/></svg>
            )
        }}
        {...props}
        />
    }
    return (
        <>
            <Divider style={{ marginBottom: '10px', color: 'red', borderColor:"red"}}>Ant Icons</Divider>
            <AppleFilled style={{fontSize:'100px', color:'palegreen'}} />
            <LoadingOutlined style={{fontSize: '80px'}}  />
            <EyeTwoTone twoToneColor='grey' style={{fontSize: '80px'}} />
            <EyeFilled style={{fontSize: '80px'}} />
            <Loading3QuartersOutlined style={{fontSize: '80px'}}  />
            <AppleOutlined style={{fontSize:'100px', color: "palegreen"}} />
            <Heart style={{color:'red'}} />
        </>
    )
}