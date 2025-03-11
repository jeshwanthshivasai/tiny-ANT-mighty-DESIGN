import React from "react";
import { Divider, Space } from "antd";
import Header from "./Header";
import Footer from "./Footer";
import SideMenu from "./SideMenu";
import PageContent from "./PageContent";
import AppRouting from "./AppRouting";

export default function AppHome() {
    return (
        <>
            <Divider style={{ marginBottom: '10px', color: 'red', borderColor:"red"}}>Admin Dashboard</Divider>
            <div className="App">
                <Header />
                <Space className="SideMenuAndPageContent">
                    <SideMenu />
                    <PageContent>
                        {/* <AppRouting/> */}
                    </PageContent>
                </Space>
                <Footer />
                {/* <Header /> */}
                {/* <SideMenu />
                <PageContent /> */}
                {/* <Footer /> */}
            </div>
        </>
    )
}