import React from "react";
import { Divider, Pagination, Space } from "antd";

export default function PagePagination() {
    return (
        <>
            <Divider style={{ marginBottom: '10px', color: 'red', borderColor:"red"}}>Pagination</Divider>
            <Space size={20} direction="vertical">
                <Pagination total={20} pageSize={5}></Pagination>
                <Pagination total={50} defaultCurrent={20}></Pagination>
                <Pagination total={200} defaultCurrent={20} pageSize={20}></Pagination>
                <Pagination simple total={200} defaultCurrent={20} pageSize={20}></Pagination>
                <Pagination total={200} showQuickJumper showLessItems='true' pageSizeOptions={[3, 6, 9, 12, 15]}></Pagination>
            </Space>
        </>
    )
}