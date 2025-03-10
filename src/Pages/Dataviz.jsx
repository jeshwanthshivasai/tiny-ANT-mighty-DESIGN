import React from "react";
import { Typography } from "antd";
import { Link } from "react-router";

export default function Dataviz() {
    return (
        <>
            <Link to="dataviz">
                <Typography.Text>Dataviz</Typography.Text>
            </Link>
        </>
    )
}