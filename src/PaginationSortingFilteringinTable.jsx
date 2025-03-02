import React, { useEffect, useState } from "react";
import { Table, Divider } from "antd";

export default function PSFTable() {
    const [loading, setLoading] = useState(false);
    const [dataSource, setDataSource] = useState([]);

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
        },
        {
            key:"3",
            title: 'Status',
            dataIndex: 'completed',
            render: (completed) => {
                return <p>{completed ? 'Complete' : 'In Progress'}</p>
            }
        },
    ]
    return (
        <>
            <Divider style={{ marginBottom: '10px', color: 'red', borderColor:"red"}}>P, S & F in Table</Divider>
            <Table bordered loading={loading} columns={columns} dataSource={dataSource}></Table>
        </>
    )
}