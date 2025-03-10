import React from "react";
import { Typography } from "antd";
import { Link } from "react-router";

export default function User() {
    return (
        <>
            <Link to="/user">
                <Typography.Text>User</Typography.Text>
            </Link>
        </>
    )
}