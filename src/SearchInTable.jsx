import React, { useState } from "react";
import { Input, Table, Divider, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export default function Searching() {

    const[dataSource, setDataSource] = useState([
        {
            name:'name1',
            age:11,
            address:'123',
        },
        {
            name:'name2',
            age:13,
            address:'234',
        },
        {
            name:'name3',
            age:17,
            address:'345',
        },
        { 
            name:'name4',
            age:19,
            address:'456',
        },
    ]);


    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters}) => {
                return (
                    <>
                        <Input autoFocus placeholder="Type here" 
                            onPressEnter={() => {
                                confirm({closeDropdown: false})
                            }} 
                            onBlur={() => {
                                confirm()
                            }} 
                            value={selectedKeys[0]} 
                            onChange={(e) => {
                                setSelectedKeys(e.target.value ? [e.target.value] : []);
                                confirm();
                            }}>

                        </Input>
                        <Button onClick={() => {confirm()}} type="primary">Search</Button>
                        <Button onClick={() => {
                            clearFilters();
                        }} danger >Reset</Button>
                    </>
                );
            },
            filterIcon: () => {
                return <SearchOutlined />
            },
            onFilter:(value, record) => {
                return record.name.toLowerCase().includes(value.toLowerCase())
            }
        },
        {
            title: "Age",
            dataIndex: 'age',
            filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters}) => {
                return (
                    <>
                        <Input autoFocus placeholder="Type here" 
                            onPressEnter={() => {
                                confirm({closeDropdown: false})
                            }} 
                            onBlur={() => {
                                confirm()
                            }} 
                            value={selectedKeys[0]} 
                            onChange={(e) => {
                                setSelectedKeys(e.target.value ? [e.target.value] : []);
                                confirm();
                            }}>

                        </Input>
                        <Button onClick={() => {confirm()}} type="primary">Search</Button>
                        <Button onClick={() => {
                            clearFilters();
                        }} danger >Reset</Button>
                    </>
                );
            },
            filterIcon: () => {
                return <SearchOutlined />
            },
            onFilter:(value, record) => {
                return record.age == value;
            }
        },
        {
            title: "Address",
            dataIndex: 'address',
            filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters}) => {
                return (
                    <>
                        <Input autoFocus placeholder="Type here" 
                            onPressEnter={() => {
                                confirm({closeDropdown: false})
                            }} 
                            onBlur={() => {
                                confirm()
                            }} 
                            value={selectedKeys[0]} 
                            onChange={(e) => {
                                setSelectedKeys(e.target.value ? [e.target.value] : []);
                                confirm();
                            }}>

                        </Input>
                        <Button onClick={() => {confirm()}} type="primary">Search</Button>
                        <Button onClick={() => {
                            clearFilters();
                        }} danger >Reset</Button>
                    </>
                );
            },
            filterIcon: () => {
                return <SearchOutlined />
            },
            onFilter:(value, record) => {
                return record.address.toLowerCase().includes(value.toLowerCase())
            }
        },
    ]
    return (
        <>
            <Divider style={{ marginBottom: '10px', color: 'red', borderColor:"red"}}>Search in Table</Divider>
            <Table bordered columns={columns} dataSource={dataSource}></Table>
            
        </>
    )
}