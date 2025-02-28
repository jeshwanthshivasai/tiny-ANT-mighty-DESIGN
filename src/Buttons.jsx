import React, { useState } from "react";
import { Button } from "antd";

export default function Buttons() {
    const [loading, setLoading] = useState(false);
    const onButtonClick = (e) => {
        console.log("Button has been clicked");
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }
    return (
        <>
            <Button type="primary" block onClick={onButtonClick} loading={loading}>Submit</Button>
            <Button type="dashed" danger block onClick={onButtonClick} loading={loading}>Submit</Button>
            <Button type="outlined" block color="pink" onClick={onButtonClick} loading={loading}>Submit</Button>
            <Button type="filled" block variant="sucess" onClick={onButtonClick} loading={loading}>Submit</Button>
        </>
    )
}
