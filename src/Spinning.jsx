import React, { useState } from "react";
import { Spin, Divider, Button } from "antd";

export default function Spinning() {
    const [Spinning, setSpinning] = useState(false);
    return (
        <>
            <Divider style={{ marginBottom: '10px', color: 'red', borderColor:"red"}}>Spin Loading</Divider>
            <Spin style={{marginBottom: '10px', display:'flex', justifyContent: 'center'}} spinning={Spinning}></Spin>
            <Button block onClick={() => {setSpinning(preValue => !preValue)}}>Toggle Spinning</Button>
            <Spin spinning={Spinning}>
                <div style={{textAlign: 'center'}} >
                    <h6>Hello, World!</h6>
                    <h6>Hello, World!</h6>
                    <h6>Hello, World!</h6>
                    <h6>Hello, World!</h6>
                </div>

            </Spin>
        </>
    )
}