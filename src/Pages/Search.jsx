import React from "react";
import { Typography } from "antd";
import { Link } from "react-router";

export default function Search() {
    return (
        <>
            <Link to="/search">
                <Typography.Text>Search</Typography.Text>
            </Link>
        </>
    )
} 