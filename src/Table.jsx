import React from "react";
import { Table, Divider } from "antd";
import Title from "antd/es/skeleton/Title";

export default function MyTable() {

    const data = [
        {
            name:"A",
            age:1,
            address:'123',
            key: '1'    
        },
        {
            name:"B",
            age:22,
            address:'456',
            key: '2'
        },
        {
            name:"C",
            age:3,
            address:'789',
            key: '3'
        },
    ]

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'key',
            render: name => {
                return <a>{name}</a>
            }
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'key',
            sorter: (x, y) => x.age - y.age,
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'key',
        },
        {
            title: 'Graduated',
            key: 'key',
            render: payload => {
                return <p>{payload.age>20 ? 'True' : 'False'}</p>
            }
        },
    ]
    return (
        <>
            <Divider style={{ marginBottom: '10px', color: 'red', borderColor:"red"}}>A Basic Table</Divider>
            <Table bordered columns={columns} dataSource={data}></Table>
        </>
    )
}