import { Typography } from "antd";
import { Link } from "react-router";

export default function User() {
    return (
        <>
            <Link to="/dashboard">
                <Typography.Text>User</Typography.Text>
            </Link>
        </>
    )
}