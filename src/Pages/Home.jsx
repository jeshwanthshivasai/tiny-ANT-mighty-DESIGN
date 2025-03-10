import React from "react";
import { Typography } from "antd";
import { Link } from "react-router";

export default function Home() {
    return (
        <>
            <Link to="/">
                <Typography.Text>Home</Typography.Text>
            </Link>
        </>
    )
}