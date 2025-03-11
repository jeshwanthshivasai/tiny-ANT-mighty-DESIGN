import React, { useEffect, useState } from "react";
import { Card, Space, Typography } from "antd";
import { Link, data } from "react-router";
import { DollarCircleOutlined, ShoppingCartOutlined, ShoppingOutlined, UserOutlined } from "@ant-design/icons";
import Statistic from "antd/es/statistic/Statistic";

export default function Dashboard() {

    return (
        <>
            <Link to="/dashboard">
                <Typography.Text>Dashboard</Typography.Text>
                <Space direction="horizontal">
                    <DashboardCard icon={<ShoppingCartOutlined style={{color:'green', backgroundColor: "rgba(0, 255, 0, 0.5)", borderRadius: 20, fontSize: 24, padding: 10}}/>} title={"Orders"} value={3845}/>
                    <DashboardCard icon={<ShoppingOutlined style={{color:'blue', backgroundColor: "rgba(0, 0, 255, 0.5)", borderRadius: 20, fontSize: 24, padding: 10}}/>} title={"Inventory"} value={3845}/>
                    <DashboardCard icon={<UserOutlined style={{color:'purple', backgroundColor: "rgba(0, 255, 255, 0.5)", borderRadius: 20, fontSize: 24, padding: 10}}/>} title={"Customer"} value={3845}/>
                    <DashboardCard icon={<DollarCircleOutlined style={{color:'red', backgroundColor: "rgba(255, 0, 0, 0.5)", borderRadius: 20, fontSize: 24, padding: 10}}/>} title={"Revenue"} value={3845}/>
                </Space>
                <Space>
                    <RecentOrder/>
                </Space>
            </Link>
        </>
    )
}

function DashboardCard({title, value}) {
    return (
        <>
            <Space direction="horizontal">
                <Card>
                    {icon}
                    <Statistic title={title} value={value} />
                </Card>
            </Space>
        </>
    )
}

function RecentOrder() {
    const [dataSource, setDataSource] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
    getOrders().then(res => {
        setDataSource(res.products);
        setLoading(false);
    });
    }, [])

    return (
        <>
            <Typography.Text>Recent Orders</Typography.Text>
            <Table columns={[
                {
                    title: "Title",
                    dataIndex: "title",
                },
                {
                    title: "Quantity",
                    dataIndex: "quantity",
                },
                {
                    title: "Price",
                    dataIndex: "discountedPrice",
                },
            ]}
            loading={loading}
            dataSource={dataSource}
            pagination={false}
            ></Table>
        </>
    )
}