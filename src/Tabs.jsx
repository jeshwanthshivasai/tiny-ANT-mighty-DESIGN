import React from "react";
import { Divider, Tabs, Space } from "antd";
import { AppleOutlined } from "@ant-design/icons";

export default function TabbyTabs() {

    const icons = [AppleOutlined, AppleOutlined, AppleOutlined];
    return (
        <>
            <Divider style={{ marginBottom: '10px', color: 'red', borderColor:"red"}}>Tabs</Divider>
            <Space>
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

            <Tabs tabPosition="left">
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
            </Space>
        </>
    )
}