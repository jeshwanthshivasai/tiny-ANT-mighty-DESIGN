import React, { useState } from "react";
import { Table, Divider, Tag } from "antd";

export default function CustomTable() {

    const [alreadySelectedRows, setAlreadySelectedRows] = useState([])

    const columns = [
        {
            title: 'Student ID',
            dataIndex: 'id'
        },
        {
            title: 'Student Name',
            dataIndex: 'name'
        },
        {
            title: 'Student Grade',
            dataIndex: 'grade',
            render: (tag) => {
                const color = tag.includes('A') ? 'green' : tag.includes('B') ? 'blue' : "red"
                return <Tag color={color}>{tag}</Tag>
            }
        },
    ]

    const dataSource = [
        {
            key: '1',
            id: 1,
            name: 'Student 1',
            grade: 'B'
        },
        {
            key: '2',
            id: 2,
            name: 'Student 2',
            grade: 'A'
        },
        {
            key: '3',
            id: 3,
            name: 'Student 3',
            grade: 'D'
        },
        {
            key: '4',
            id: 4,
            name: 'Student 4',
            grade: 'A+'
        },
        {
            key: '5',
            id: 5,
            name: 'Student 5',
            grade: 'C'
        },
    ]


    return (
        <>
            <Divider style={{ marginBottom: '10px', color: 'red', borderColor:"red"}}>Custom Selection Table </Divider>
            <Table 
            columns={columns} 
            dataSource={dataSource} 
            rowSelection={{
                type: 'checkbox', 
                selectedRowKeys:alreadySelectedRows, 
                onChange:(keys) => {
                setAlreadySelectedRows(keys)
            }, 
            onSelect:(record) => {
                console.log({record})
            },
            // getCheckboxProps:(record)=> ({
            //     disabled: record.grade === 'C'
            // }),
            selections:[
                Table.SELECTION_ALL,
                Table.SELECTION_NONE,
                Table.SELECTION_INVERT,
                // Select Even Rows
                {
                    key: 'even',
                    text: 'Select Even Rows',
                    onSelect : (allKeys) => {
                        const selectedKeys = allKeys.filter(key => {
                            return key % 2 == 0
                        })
                        setAlreadySelectedRows(selectedKeys)
                    }
                },
                // Select Rows with Higher Grades
                {
                    key: 'excellent',
                    text: 'Select Students with Higher Grades',
                    onSelect : (allKeys) => {
                        const selectedKeys = allKeys.filter(key => {
                            const isExcellent = dataSource.find(student => {
                               return student.key  == key && student.grade.includes('A') 
                            })
                            return isExcellent;
                        })
                        setAlreadySelectedRows(selectedKeys)
                    }
                }
            ]
            }}>
            </Table>
        </>
    )
}