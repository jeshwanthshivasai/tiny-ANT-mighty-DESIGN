import React from "react";
import { Button, Divider, Spin, Upload } from "antd";

export default function FileUpload() {
    return (
        <>
            <Divider style={{ marginBottom: '10px', color: 'red', borderColor:"red"}}>File Upload</Divider>
            <Upload.Dragger 
            multiple 
            listType="picture" 
            showUploadList={{showRemoveIcon: true, showDownloadIcon: true}} 
            // accept=".png, .jpeg" 
            beforeUpload={(file) => {
                console.log({file});
                return true;
            }}
            defaultFileList={[
                {
                    uid:'abc',
                    name:'existing_file.png',
                    status: 'uploading',
                    percent: 33
                }
            ]}
            iconRender={() => {
                return <Spin></Spin>
            }}
            itemRender={(existingComp, file) => {
                return <p>{file.name}</p>;
            }}
            progress={{strokeWidth: 3, strokeColor: {'0%': '#fof', '100%': '#31ff80'}, style:{top: 12}}}
            >
                Drag Files <br /> OR <br />
                <Button>Upload</Button>
            </Upload.Dragger>
        </>
    )
}