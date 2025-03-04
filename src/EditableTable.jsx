import React, { useEffect, useState } from "react";
import { Divider, Table, Button, Form, message } from "antd";

export default function EditableTable() {

    const [dataSource, setDataSource] = useState([]);
    const [editingRow, setEditingRow] = useState(null);

    useEffect(() => {
        const data = [];
        for(let index = 0; index < 7; index++) {
            data.push({
                key: `${index}`,
                name: `Name ${index}`,
                address: `Address ${index}`,
            });
        }
        setDataSource(data);
    }, [])

    const columns = [
        {
            title:'Name',
            dataIndex: 'name',
            render: (text, record) => {
                if (editingRow === record.key) {
                    return (
                        <Form.Item
                            name='name'
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter your name',
                                }
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    )
                } else {
                    return <p>{text}</p>
                }
            },
        },
        {
            title:'Address',
            dataIndex: 'address',
            render: (text, record) => {
                if (editingRow === record.key) {
                    return (
                        <Form.Item
                            name='address'
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter your address',
                                }
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    )
                } else {
                    return <p>{text}</p>
                }
            },
        },
        {
            title:'Actions',
            render: (_, record) => {
                return (
                    <>
                        <Button type="link" onClick={() => {
                            setDataSource(record.key);
                        }}>Edit</Button>
                        <Button type="link" onClick={() => {
                            setDataSource(record);
                        }}>Save</Button>
                    </>
                )
            }
        },
    ]

    return (
        <>
            <Divider style={{ marginBottom: '10px', color: 'red', borderColor:"red"}}>Editable Table</Divider>
            <Form>
                <Table bordered columns={columns} dataSource={dataSource}></Table>
            </Form>
        </>
    )
}