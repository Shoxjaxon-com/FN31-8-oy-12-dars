import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from 'react-router-dom';
import FormInput from '../componets/FormInput';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { useRegister } from '../hook/useRegister';

function Register() {
  const { registerWithGoogle } = useRegister();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, password, confirmPassword } = formData;

    if (!name.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
      setError('Barcha maydonlarni to‘ldiring!');
      return;
    }

    if (password !== confirmPassword) {
      setError('Parollar mos kelmadi!');
      return;
    }

    setError('');
    navigate('/login'); // Login sahifasiga yo‘naltirish
  };

  return (
    <div className="flex min-h-screen w-full flex-col md:flex-row">
      <div className="hidden md:w-[40%] bg-[url('https://picsum.photos/seed/picsum/600/800')] bg-cover bg-center md:block"></div>

      <div className="flex w-full items-center justify-center bg-[url('https://picsum.photos/seed/picsum/600/800')] bg-cover bg-center md:w-[60%] md:bg-none rounded-md">
        <Form method="post" className="w-full max-w-md" onSubmit={handleSubmit}>
          <h1 className="text-2xl md:text-4xl font-bold mb-5 text-center">Register Page</h1>
          
          <div className="flex flex-col gap-4">
            <FormInput 
              placeholder="Full Name" 
              name="name" 
              type="text" 
              value={formData.name} 
              onChange={handleChange}
            />
            <FormInput 
              placeholder="Email" 
              name="email" 
              type="email" 
              value={formData.email} 
              onChange={handleChange}
            />
            <FormInput 
              placeholder="Password" 
              name="password" 
              type="password" 
              value={formData.password} 
              onChange={handleChange}
            />
            <FormInput 
              placeholder="Confirm Password" 
              name="confirmPassword" 
              type="password" 
              value={formData.confirmPassword} 
              onChange={handleChange}
            />
          </div>

          {error && <p className="text-red-500 text-center mt-2">{error}</p>}

          <div className="my-5 flex flex-col gap-3 md:my-10 md:flex-row md:gap-5">
            <button type="submit" className="grow btn btn-primary btn-sm md:btn-md">
              Register
            </button>
            <button
              onClick={registerWithGoogle}
              type="button"
              className="grow btn btn-secondary btn-sm md:btn-md flex items-center gap-2 justify-center"
            >
              <FcGoogle className="w-6 h-6" />
              <span>Google</span>
            </button>
          </div>
          
          <div className='text-center'>
            <Link to='/login' className='link-primary'>You already have an account!</Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Register;
