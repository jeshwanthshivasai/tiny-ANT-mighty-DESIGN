import React, {useRef, useState } from "react";
import { Divider, Tabs, Space } from "antd";
import { AppleOutlined } from "@ant-design/icons";

export default function TabbyTabs() {
    const nextTabIndex = useRef(3);
    const [tabsList, setTabsList] = useState([
        {tab:'Tab 1', key: 'tab1'},
        {tab: 'Tab 2', key: 'tab2'},
    ])

    const onEdit = (tabKey, action) => {
        if(action === 'add') {
            setTabsList((pre) => [...pre, 
                {
                    tab: `Tab ${nextTabIndex.current}`,
                    key:`tab${nextTabIndex.current}`,
                }
            ]);
            nextTabIndex.current += 1
        } else if (action === 'remove') {
            setTabsList(pre => [...pre.filter(tab => tab.key !== tabKey)])
        }
    }

    const icons = [AppleOutlined, AppleOutlined, AppleOutlined];
    return (
        <>
            <Divider style={{ marginBottom: '10px', color: 'red', borderColor:"red"}}>Tabs</Divider>
            <Space direction="vertical">
            <Tabs>
                <Tabs.TabPane tab="Tab 1" key="tab1">
                    <div>This is a content of Tab 1</div>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Tab 2" key="tab2">
                    <div>This is a content of Tab 2</div>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Tab 3" key="tab3">
                    <div>This is a content of Tab 3</div>
                </Tabs.TabPane>
            </Tabs>

            <Tabs
                tabPosition="top"
                items={icons.map((Icon, i) => {
                    const id = `tab${i + 1}`;
                    return {
                        key: id,
                        label: (
                            <span>
                                <Icon /> Tab {i + 1}
                            </span>
                        ),
                        children: <div>This is the content of Tab {i + 1}</div>,
                    };
                })}
            />

            {/* <Tabs tabPosition="top">
                <Tabs.TabPane tab={<span><AppleOutlined/> Tab 1</span>} key="tab1">
                    <div>This is a content of Tab 1</div>
                </Tabs.TabPane>
                <Tabs.TabPane tab={<span><AppleOutlined/> Tab 2</span>} key="tab2">
                    <div>This is a content of Tab 2</div>
                </Tabs.TabPane>
                <Tabs.TabPane tab={<span><AppleOutlined/> Tab 3</span>} key="tab3">
                    <div>This is a content of Tab 3</div>
                </Tabs.TabPane>
            </Tabs> */}

            <Tabs type="card">
                {tabsList.map((tabInfo, index) => {
                    return (
                        <Tabs.TabPane tab={tabInfo.tab} key={tabInfo.key}><div>This is content of {tabInfo.tab}</div></Tabs.TabPane>
                    )
                })}
            </Tabs>
            <Tabs type="editable-card" onEdit={onEdit}>
                {tabsList.map((tabInfo, index) => {
                    return (
                        <Tabs.TabPane tab={tabInfo.tab} key={tabInfo.key} closable={index > 1}><div>This is content of {tabInfo.tab}</div></Tabs.TabPane>
                    )
                })}
            </Tabs>

            <Tabs tabPosition="left" onEdit={onEdit}>
                <Tabs.TabPane tab="Tab 1" key="tab1">
                    <div>This is a content of Tab 1</div>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Tab 2" key="tab2">
                    <div>This is a content of Tab 2</div>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Tab 3" key="tab3">
                    <div>This is a content of Tab 3</div>
                </Tabs.TabPane>
            </Tabs> 
            </Space>
        </>
    )
}