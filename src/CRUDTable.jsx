import React, { useState } from "react";
import { Button, Divider, Modal, Space, Table } from "antd";
import { DeleteFilled, EditFilled} from "@ant-design/icons";
 
export default function CRUDTable() {

    const [dataSource, setDataSource] = useState([
        {
            id:1,
            name:'John Doe',
            email:'johndoe@gmail.com',
            address:'123-456'
        },
        {
            id:2,
            name:'Jade Blue',
            email:'jadeblue@gmail.com',
            address:'456-789'
        },
        {
            id:3,
            name:'Quincy Jones',
            email:'quincyjones@gmail.com',
            address:'789-321'
        },
    ])

    const columns = [
        {
            key:'1',
            title: 'ID',
            dataIndex: 'id'
        },
        {
            key:'2',
            title: 'Name',
            dataIndex: 'name'
        },
        {
            key:'3',
            title: 'Email',
            dataIndex: 'email'
        },
        {
            key:'4',
            title: 'Address',
            dataIndex: 'address'
        },
        {
            key:'5',
            title: 'Actions',
            render: (record) => {
                return (
                    <>  
                        <Space>
                            <EditFilled style={{color: ''}} />
                            <DeleteFilled
                                onClick={() => {
                                    deleteStudent(record);
                                }}
                                style={{color: 'Red'}} />
                        </Space>
                    </>
                )
            }
        },
    ]

    const addStudent = () => {
        const randomNumber = parseInt(Math.random() * 1000);
        const newStudent = {
            id: randomNumber,
            name: "Name " + randomNumber,
            email: "Name" + randomNumber + '@gmail.com',
            address: "Address " + randomNumber, 
        };
        setDataSource((pre) => {
            return [...pre, newStudent];
        });
    };

    const deleteStudent = (record) => {
        Modal.confirm({
            title:'Are you sure, you want to delete this student record?',
            okText:"Yes",
            okType:"danger",
            onOk:() => {
                setDataSource((pre) => {
                    return pre.filter((student) => student.id !== record.id);
                });
            },
        });
    };



    return (
        <>
            <Divider style={{ marginBottom: '10px', color: 'red', borderColor:"red"}}>CRUD Table</Divider>
            <Button style={{display:'block', margin:'auto', marginBottom:'15px'}} onClick={addStudent}>Add a New Student</Button>
            <Table bordered columns={columns} dataSource={dataSource}></Table>
        </>
    )
}