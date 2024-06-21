import React from 'react';
import { Form, Input, Button } from 'antd';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

function Register() {

  const navigation =  useNavigate();

  const onFinish = async (values) => {
    try {
      const response = await axios.post('/api/user/register', values);
      if (response.data.success) {
        toast.success(response.data.message);
        toast("Redirect to login page")
        navigation('/login');
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
    // console.log("received data",values);
  };

  return (
    <>
      <h2 className='card-title'>Register Page</h2>
      <div className="authentication p-5">
        <div className="authentication-form card p-3">
          <Form layout='vertical' onFinish={onFinish}>
            <Form.Item 
              label="Name" 
              name='name'
              rules={[{ required: true, message: 'Please input your name!' }]}
            >
              <Input placeholder="Name" />
            </Form.Item>
            <Form.Item 
              label="Email" 
              name='email'
              rules={[{ required: true, message: 'Please input your email!', type: 'email' }]}
            >
              <Input placeholder="Email" type='email' />
            </Form.Item>
            <Form.Item 
              label="Password" 
              name='password'
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input placeholder="Password" type='password' />
            </Form.Item>

            <Button className="primary-button my-3" htmlType='submit'>
              Register
            </Button>

            <Link to='/login' className='redirect mt-3'>Click here to login</Link>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Register;
