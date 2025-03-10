import React from "react";
import { Typography } from "antd";
import { Link } from "react-router";

export default function Dashboard() {
    return (
        <>
            <Link to="/dashboard">
                <Typography.Text>Dashboard</Typography.Text>
            </Link>
        </>
    )
}