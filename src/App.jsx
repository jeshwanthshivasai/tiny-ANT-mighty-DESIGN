import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  DatePicker,
  message,
  Alert,
  Tooltip,
  Select,
  Space,
  Divider,
  Table,
  TimePicker,
  Progress,
  Checkbox,
} from 'antd';
import {
  UserOutlined,
  PlusOutlined,
  MinusCircleOutlined,
} from '@ant-design/icons';
import FormItem from 'antd/es/form/FormItem';
import Operation from 'antd/es/transfer/operation';



import ReusableForm from './ResuableForm';
import Buttons from './Buttons';
import InputField from './Input';
import Selection from './Selection';
import SimpleForm from './SimpleForm';
import MyTable from './Table';
import TimeandDatePicking from './TimeandDate';
import Spin from './Spinning';
import ProgressBars from './Progress';
import PSFTable from './PaginationSortingFilteringinTable';
import CustomTable from './CustomTable';
import AntIcons from './Icons';
import CRUDTable from './CRUDTable';
import Searching from './SearchInTable';
import AntTheming from './Theming';
import Tablination from './TablePagination';
import FileUpload from './FileUpload';
import TaggyTags from './TaggyTags';
import EditableTable from './EditableTable';



const App = () => {
  // const [date, setDate] = useState(null);


  // const [messageApi, contextHolder] = message.useMessage();
  // const handleChange = (value) => {
  //   messageApi.info(
  //     `Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`
  //   );
  //   setDate(value);
  // };


  // const [showAlert, setshowAlert] = useState(false);
  // const onFinish = (e) => {
  //   console.log(e);
  //   setTimeout(() => {
  //     setshowAlert(true);
  //   }, 2000);
  // };

  const data = [
    {
      name: 'One',
      age: 1,
      address: 123,
      key: '1',
    },
    {
      name: 'Two',
      age: 2,
      address: 234,
      key: '2',
    },
    {
      name: 'Three',
      age: 3,
      address: 345,
      key: '3',
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  const columns1 = [
    {
      key: '1',
      title: 'ID',
      dataIndex: 'id',
    },
    {
      key: '2',
      title: 'UserID',
      dataIndex: 'userid',
    },
    {
      key: '1',
      title: 'ID',
      dataIndex: 'id',
    },
  ];

  const onFinish1 = (values) => {
    console.log({ values });
  };

  const formFields = [
    { name: 'name', label: 'Name', rules: [{ required: true }] },
    { name: 'email', label: 'Email', rules: [{ type: 'email' }] },
    {
      name: 'gender',
      label: 'Gender',
      type: 'select',
      options: [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
      ],
      rules: [{ required: true }],
    },
  ];

  const handleSubmit = (values) => {
    console.log(values);
  };

  const { Option } = Select;

  return (
    <>
      <Buttons />
      <InputField />
      <Selection />
      <SimpleForm />
      <MyTable />
      <TimeandDatePicking />
      <Spin />
      <ProgressBars />
      <PSFTable />
      <CustomTable />
      <AntIcons />
      <CRUDTable />
      <Searching />
      <AntTheming />
      <Tablination />
      <FileUpload />
      <TaggyTags />
      <EditableTable />
      



      {/* <Divider style={{ marginBottom: '10px' }}>Date, Month & Time</Divider>
      <DatePicker />
      <DatePicker.MonthPicker />
      <TimePicker /> */}


      {/* <Divider style={{ marginBottom: '10px' }}>Form</Divider>
      {showAlert && (
        <Alert type="error" message="error" description="error on login" />
      )}
      <Form onFinish={onFinish}>
        <Form.Item
          label="User Name"
          name="username"
          rules={[{ required: true, message: 'Please enter your username!' }]}
        >
          <Input placeholder="Enter your Username" required></Input>
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please enter your password!' }]}
        >
          <Input.Password placeholder="Password" required></Input.Password>
        </Form.Item>
        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form> */}


      <Divider style={{ marginBottom: '20px' }}>Form Validation</Divider>
      <Form
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 15 }}
        autoComplete="off"
        onFinish={(values) => {
          console.log({ values });
        }}
        onFinishFailed={(error) => {
          console.log({ error });
        }}
      >
        <Form.Item
          name="fullname"
          label="Full Name"
          hasFeedback
          rules={[
            { required: true, message: 'Please enter your name' },
            {
              whitespace: true,
            },
            {
              min: 3,
            },
          ]}
        >
          <Input placeholder="Type your name" />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          hasFeedback
          rules={[
            { required: true, message: 'Please enter your email' },
            {
              type: 'email',
              message: 'Please enter a valid email',
            },
          ]}
        >
          <Input placeholder="Type your Email" />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          hasFeedback
          rules={[
            { required: true },
            { min: 6 },
            {
              validator: (_, value) =>
                value && value.includes('A')
                  ? Promise.resolve()
                  : Promise.reject('Does not match the criteria'),
            },
          ]}
        >
          <Input.Password placeholder="Type your password" />
        </Form.Item>

        <Form.Item
          name="confirmPwd"
          label="Confirm Password"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject("Password doesn't match");
              },
            }),
          ]}
        >
          <Input placeholder="Confirm your password" />
        </Form.Item>

        <Form.Item name="gender" label="Gender" requiredMark="optional">
          <Select placeholder="Select your Gender">
            <Select.Option value="male">Male</Select.Option>
            <Select.Option value="female">Female</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="dob"
          label="Select Date of Birth"
          hasFeedback
          rules={[{ required: true, message: 'Please enter your dob' }]}
        >
          <DatePicker
            style={{ width: '100%' }}
            picker="date"
            placeholder="Choose Date of Birth"
          />
        </Form.Item>

        <Form.Item
          name="website"
          label="Website"
          hasFeedback
          rules={[
            {
              type: 'url',
              message: 'Please enter a valid URL',
            },
          ]}
        >
          <Input placeholder="Add your website URL" />
        </Form.Item>

        <Form.Item
          name="agreement"
          wrapperCol={{ span: 25 }}
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(
                      'To proceed, you need to agree with the T&C'
                    ),
            },
          ]}
        >
          <Checkbox>
            Agree to our <a href="">Terms and Conditions</a>
          </Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ span: 25 }}>
          <Button block type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>{' '}
      <Divider style={{ marginBottom: '20px' }}>Dynamic Form</Divider>
      <Form onFinish={onFinish1}>
        <Form.Item name={'teacher'} table="Teacher Name">
          <Input placeholder="Enter Teacher Name" />
        </Form.Item>

        <Form.Item name={'class'} table="Class Name">
          <Input placeholder="Enter Class Name" />
        </Form.Item>

        <Form.List name={'students'}>
          {(fields, { add, remove }) => (
            <>
              {fields.map((field, index) => {
                return (
                  <Space key={field.key} direction="horizontal">
                    <Form.Item
                      name={[field.name, 'first']}
                      label={`Student-${index + 1}`}
                    >
                      <Input placeholder="First Name" />
                    </Form.Item>
                    <Form.Item
                      name={[field.name, 'last']}
                      label={`Student-${index + 1}`}
                    >
                      <Input placeholder="Last Name" />
                    </Form.Item>
                    <Form.Item name={[field.name, 'gender']}>
                      <Select placeholder="Select Gender">
                        {' '}
                        {['Male', 'Female'].map((gender) => {
                          return (
                            <Select.Option value={gender} key={gender}>
                              {gender}
                            </Select.Option>
                          );
                        })}
                      </Select>
                    </Form.Item>
                    <MinusCircleOutlined
                      style={{ color: 'red' }}
                      onClick={() => {
                        remove(field.name);
                      }}
                    />
                  </Space>
                );
              })}
              <Form.Item>
                <Button
                  icon={<PlusOutlined />}
                  type="dashed"
                  block
                  onClick={() => {
                    add();
                  }}
                >
                  Add a Student
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </Form>
      <Button htmlType="submit" type="primary">
        Submit
      </Button>
      <Divider style={{ marginBottom: '20px' }}>Reusable Form</Divider>
      <ReusableForm fields={formFields} onSubmit={handleSubmit} />
    </>
  );
};
export default App;
