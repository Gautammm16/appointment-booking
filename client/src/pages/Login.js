import {Form,Input,Button} from 'antd'
import {React} from 'react'
import {Link, useNavigate} from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';


function Login ()  {
  const navigation = useNavigate();
    const onFinish= async (values)=>{
      try {
        const response = await axios.post('/api/user/login', values);
        if (response.data.success) {
          toast.success(response.data.message);
          toast("Redirect to home page")
          localStorage.setItem("token",response.data.data);
          navigation('/')
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error("Something went wrong");
      }
    };

    
    return (<>
     <h2 className='card-title '>Login Page</h2>
    <div className="authentication p-5">
    <div className="authentication-form card p-3">

      <Form layout='vertical' onFinish={onFinish}>
     
        <Form.Item label="Email" name='email'>
          <Input placeholder="Email" type='email'/>
        </Form.Item>
        <Form.Item label="Password" name='password' >
          <Input placeholder="Password" type='password'/>
        </Form.Item>

        <Button className="primary-button my-3" htmlType='submit'>
          Login
        </Button>
    

        <Link to='/register' className='redirect mt-3'>click here to Register</Link>

      
      </Form>

    </div>
      
    </div>
    </>
  )
}


export default Login