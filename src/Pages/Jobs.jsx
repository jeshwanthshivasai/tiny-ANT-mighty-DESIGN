import React from "react";
import { Typography } from "antd";
import { Link } from "react-router";

export default function Jobs() {
    return (
        <>
            <Link to="/jobs">
                <Typography.Text>Jobs</Typography.Text>
            </Link>

        </>
    )
}