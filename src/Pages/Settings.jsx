import React from "react";
import { Typography } from "antd";
import { Link } from "react-router-dom";

export default function Settings() {
    return (
        <>
            <Link to="/settings">
                <Typography.Text>Settings</Typography.Text>
            </Link>
        </>
    )
}