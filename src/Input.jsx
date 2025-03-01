import React, {useState} from "react";
import { Input, Button, Divider, Space, Tooltip } from "antd";
import {
  UserOutlined,

} from '@ant-design/icons';

export default function InputField() {

  const [loading, setLoading] = useState(false);

  const buttonClick = (e) => {
    console.log('Button Clicked');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <Divider style={{ marginBottom: '10px', color: 'red', borderColor:"red"}}>Simple Input and Submit</Divider>
      <Space direction="vertical" size="middle" style={{ width:'100%' }}>
        <Input placeholder="Enter your name" maxLength={10} prefix={<UserOutlined />} style={{ marginBottom: '10px' }} allowClear></Input>
      </Space>
      <Tooltip title="submit">
        <Button
          style={{ padding: '', backgroundColor: 'cyan', }}
          block
          type="primary"
          onClick={buttonClick}
          loading={loading}
        >
        Submit
        </Button>
      </Tooltip>
    </>
  )
}