import React from "react";
import { Image, Menu } from "antd";
import {HomeOutlined, DashboardOutlined, SearchOutlined, UserOutlined, BankOutlined, SolutionOutlined, AuditOutlined, BarChartOutlined, SettingOutlined} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export default function SideMenu() {
    const navigate = useNavigate();
    return (
        <>
            <div className="Side Menu">
                <div className="brand-logo">
                    <img
                        style={{
                            marginTop:'20px', marginBottom: '20px'
                        }}
                        width={250}
                        src="https://stg-matnext-in.genbanext.com/static/media/matnext-only-text.64f3ce6815dbe7024d05.png"
                    />
                </div>
                <Menu
                onClick={(item) => {
                    navigate();
                }}
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
                    {label: 'Data Visualization', key:'dataviz', icon: <BarChartOutlined />},
                    {label: 'Settings', key:'settings', icon: <SettingOutlined />},
                ]} 
                ></Menu>
            </div>
        </>
    )
}