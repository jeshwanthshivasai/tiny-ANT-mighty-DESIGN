import React, { useEffect, useState } from "react";
import { Table, Divider } from "antd";

export default function Tablination() {

    useEffect(() => {
        fetchData();
    }, [])

    const [dataSource, setDataSource] = useState([])
    const [totalPages, setTotalPages] = useState(1)

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
        },
        {
            title: 'Title',
            dataIndex: 'title',
        },
        {
            title: 'Price',
            dataIndex: 'price',
        },
        {
            title: 'Description',
            dataIndex: 'description',
        },
        {
            title: 'Category',
            dataIndex: 'category',
        },
        {
            title: 'Image',
            dataIndex: 'image',
            render: (imgSrc) => <img src={imgSrc} alt='' width='50' />,
        },
        {
            title: 'Rating',
            dataIndex: 'rating',
            render: (rating) => `${rating.rate} ⭐️ (${rating.count} reviews)`,
        },
    ]

    // const fetchData = () => {
    //     fetch('https://fakestoreapi.com/products')
    //     .then(res => res.json())
    //     .then(data => {
    //         setDataSource(data.data)
    //     })
    // }

    const fetchData = (page) => {
        fetch('https://fakestoreapi.com/products')
        .then((res) => {
            res.json().then((response) => {
                setDataSource(response.data)
                setTotalPages(response.totalPages)
            });
        });
    }
 
    return (
        <>
            <Divider style={{ marginBottom: '10px', color: 'red', borderColor:"red"}}>Table Pagination</Divider>
            <Table bordered columns={columns} dataSource={dataSource} pagination={{
                pageSize: 10,
                total: totalPages,
                onChange: (page) => {
                    fetchData(page);
                }
            }}></Table>
        </>
    )
}