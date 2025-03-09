import { Typography } from "antd";
import { useNavigate } from "react-router";

export default function Dashboard() {
    const navigate = useNavigate();
    return (
        <>
            <Typography.Text navigate={<Dashboard/>}>Dashboard</Typography.Text>
        </>
    )
}