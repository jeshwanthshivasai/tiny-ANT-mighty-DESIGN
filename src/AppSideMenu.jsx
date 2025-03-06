import React from "react";
import { Divider, Menu } from "antd";
import { Route, Routes, useNavigate } from "react-router";
import { DashboardOutlined, HomeOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";

export default function AppSideMenu() {
    const navigate = useNavigate();
    return (
        <>
            <Divider style={{ marginBottom: '10px', color: 'red', borderColor:"red"}}>App Side Menu</Divider>
            <div>
                <Header />
                    <div style={{ display: 'flex', flexDirection: 'row', height: '70vh'}}>
                        <SideMenu />
                        <Content />
                    </div>
                <Footer />
            </div>
                
        </>
    )
}

function Header() {
    return (
        <>
            <div style={{ height: 60, backgroundColor: 'blue', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 'large'}} >Header</div>
        </>
    )
}

function Footer() {
    return (
        <>
            <div style={{ height: 60, backgroundColor: 'blue', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 'large'}} >Footer</div>
        </>
    )
}

function Home() {
    return (
        <>
            <div>Home</div>
        </>
    )
}

function SideMenu() {
    const navigate = useNavigate();
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row'}}>   
                <Menu onClick={({key}) => {navigate(key)}} items={[
                    {label: 'Home', key:'/', icon:<HomeOutlined />},
                    {label: 'Dashboard', key:'/dashboard', icon:<DashboardOutlined />, children: [{ label: 'Lorem Ipsum1', key: '/loremipsum1'}, { label: 'Lorem Ipsum2', key: '/loremipsum2'}]},
                    {label: 'Profile', key:'/profile', icon:<UserOutlined />},
                    {label: 'Settings', key:'/settings', icon:<SettingOutlined/>},
                ]}></Menu>
            </div>
        </>
    )
}

function Content() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/dashboard' element={<div>Dashboard</div>}></Route>
                <Route path='/loremipsum1' element={<div>Lorem Ipsum 1</div>}></Route>
                <Route path='/loremipsum2' element={<div>Lorem Ipsum 2</div>}></Route>
                <Route path='/profile' element={<div>Profile</div>}></Route>
                <Route path='/settings' element={<div>Settings</div>}></Route>
            </Routes>
        </div>
    )
}