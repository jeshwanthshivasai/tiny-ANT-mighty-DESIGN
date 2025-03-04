import React, { useEffect, useState } from "react";
import { Table, Divider } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export default function PSFTable() {
    const [loading, setLoading] = useState(false);
    const [dataSource, setDataSource] = useState([]);
    const [page, setpage] = useState(1);
    const [pageSize, setPageSize] = useState(1);

    useEffect(() => {
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => {
            setDataSource(data)
        }).catch(e => {
            console.log(e)
        }).finally(() => [
            setLoading(false)
        ])
    }, [])

    const columns = [
        {
            key:"1",
            title: 'ID',
            dataIndex: 'id',
        },
        {
            key:"2",
            title: 'User ID',
            dataIndex: 'userId',
            sorter: (record1, record2) => {
                return record1.userId > record2.userId
            }
        },
        {
            key:"3",
            title: 'Status',
            dataIndex: 'completed',
            render: (completed) => {
                return <p>{completed ? 'Complete' : 'In Progress'}</p>
            },
            filters: [
                {text:'Complete', value:true},
                {text:'In Progress', value:false}
            ],
            onFilter: (value, record) => {
                return record.completed === value
            },
            filterIcon: () => {
                return <SearchOutlined />
            },
        },
    ]
    return (
        <>
            <Divider style={{ marginBottom: '10px', color: 'red', borderColor:"red"}}>P, S & F in Table</Divider>
            <Table bordered loading={loading} columns={columns} dataSource={dataSource} pagination={{pageSize:pageSize, current:page, onChange:(page, pageSize) => {
                    setpage(page);
                    setPageSize(pageSize)
                }
            }}></Table>
        </>
    )
}