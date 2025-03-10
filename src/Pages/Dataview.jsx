import React from "react";
import { Typography } from "antd";
import { Link } from "react-router";

export default function Dataview() {
    return (
        <>
            <Link to="dataview">
                <Typography.Text>Dataview</Typography.Text>
            </Link>
        </>
    )
}