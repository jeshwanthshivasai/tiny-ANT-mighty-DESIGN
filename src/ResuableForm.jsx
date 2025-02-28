import React from 'react';
import { Form, Input, Select, Button } from 'antd';

const ReusableForm = ({ fields, onSubmit }) => {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    onSubmit(values);
    form.resetFields;
  };

  const { Option } = Select;
  return (
    <Form form={form} onFinish={handleFinish}>
      {fields.map((field) => (
        <Form.Item
          key={field.name}
          name={field.name}
          label={field.label}
          rules={field.rules}
        >
          {field.type === 'select' ? (
            <Select>
              {field.options.map((option) => (
                <Option key={option.value} value={option.value}>
                  {option.label}
                </Option>
              ))}
            </Select>
          ) : (
            <Input type={field.inputType || 'text'} />
          )}
        </Form.Item>
      ))}
      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ReusableForm;
