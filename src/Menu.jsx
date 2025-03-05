import React from "react";
import { Divider, Menu, Space } from "antd";
import { HomeOutlined, UserOutlined, SearchOutlined, SettingOutlined, DashboardOutlined, BankOutlined, AuditOutlined, BarChartOutlined, SolutionOutlined } from "@ant-design/icons";

export default function MenuDemo() {
    return (
        <>
            <Divider style={{ marginBottom: '10px', color: 'red', borderColor:"red"}}>Menu</Divider>
            <Space>
            <Menu
                mode="inline"
                items={[
                    {label: 'Home', key:'home', icon: <HomeOutlined />},
                    {label: 'Dashboard', key:'dashoard', icon: <DashboardOutlined/> },
                    {label: 'Search', key:'search', icon: <SearchOutlined />},
                    {label: 'User', key:'user', icon: <UserOutlined />, children: [
                        {label: 'Admin', key: 'admin'},
                        {label: 'Dealer', key: 'dealer'},
                        {label: 'Collection Center', key: 'collectioncenter'},
                        {label: 'Scrapping Facility', key: 'scrappingfacility'},
                        {label: 'Disposer', key: 'disposer'},
                        {label: 'Part Producer', key: 'partproducer'},
                        {label: 'Producer', key: 'producer'},
                        {label: 'National(Government)', key: 'nationalgovt'},
                    ]},
                    {label: 'Inventory', key:'inventory', icon: <BankOutlined/>},
                    {label: 'Jobs', key:'jobs', icon: <SolutionOutlined />},
                    {label: 'Dataview', key:'dataview', icon: <AuditOutlined />},
                    {label: 'Data Visualisation', key:'datavisuslisation', icon: <BarChartOutlined />},
                    {label: 'Settings', key:'settings', icon: <SettingOutlined />},
                ]} 
            ></Menu>
            </Space>
        </>
    )
}