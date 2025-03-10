import React from "react";
import { Typography } from "antd";
import { Link } from "react-router";

export default function Inventory() {
    return (
        <>
            <Link to="/inventory">
                <Typography.Text>Inventory</Typography.Text>
            </Link>
        </>
    )
}