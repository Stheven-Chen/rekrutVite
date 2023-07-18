import React, { useState } from 'react';
import Input from '../component/input';
import Button from '../component/button';
import {useDispatch} from 'react-redux';
import {login} from '../reducers/userSlice';
import {useNavigate} from 'react-router-dom';
import logoImage from '../assets/logo.svg';

const Login: React.FC = () => {
  const [data, setData] = useState({
    username: '',
    password: ''
  });

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const inputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setData((prevData: any) => ({
      ...prevData,
      [name]: value.trim().toLowerCase()
    }));
  };

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // const res = await fetch(`http://192.168.137.1:3001/users/${data.username}/${data.password}`, {
      const res = await fetch(`https://rekrutserver.stheven.website/users/${data.username}/${data.password}`, {
        method: 'POST'
      });
      const user = await res.json();
      if (!res.ok) {
        throw new Error('Authentication failed');
      }
      // Handle successful login
      dispatch(
        login({
            user:user.user,
            nama:user.nama
        })
      )
      console.log('User logged in successfully:', user);
      navigate('home')
    } catch (error) {
      // Handle error during login
      console.error('Error during login:', error);
      alert('Login failed. Please check your credentials and try again.');
    }
  };
  

  return (
    <div className='flex flex-col justify-center items-center min-h-screen bg-gray-200 font-Poppins'>
      <div className='w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 rounded-xl shadow-xl bg-white p-6'>
  <div className='text-2xl font-bold mb-10 text-primary'><img src={logoImage} alt="logo" /></div>
      <div className='flex flex-col justify-center items-center w-full my-8'>
      <span className='text-lg font-semibold'>Recruitment</span>
      <span className='text-lg font-semibold'>Database</span>
      </div>
        <form onSubmit={submit}>
          <div className=''>
            <Input
              for='username'
              label='Username: '
              value={data.username}
              onChange={inputChange}
              isRequired={true}
            />
          </div>
          <div className=''>
            <Input
              for='password'
              label='Password: '
              value={data.password}
              onChange={inputChange}
              type='password'
              isRequired={true}
            />
          </div>
          <div className='mb-4 flex justify-center items-center'>
            <Button 
            text='Login'
            textColor='white'
             />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
