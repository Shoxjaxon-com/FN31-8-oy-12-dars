import React, { useState } from 'react';
import { Form, Link, useNavigate } from 'react-router-dom';
import FormInput from '../componets/FormInput';
import { FcGoogle } from 'react-icons/fc';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      setError('Bunday foydalanuvchi mavjud emas!');
      return;
    }

    const userData = JSON.parse(storedUser);
    if (userData.email !== email || userData.password !== password) {
      setError('Email yoki parol noto‘g‘ri!');
      return;
    }

    // Login muvaffaqiyatli bo‘lsa, foydalanuvchini Home sahifasiga yuboramiz
    navigate('/home');
  };

  return (
    <div className="flex min-h-screen w-full flex-col md:flex-row">
      <div className="hidden md:w-[40%] bg-[url('https://picsum.photos/seed/picsum/600/800')] bg-cover bg-center md:block"></div>

      <div className="flex w-full items-center justify-center bg-[url('https://picsum.photos/seed/picsum/600/800')] bg-cover bg-center md:w-[60%] md:bg-none rounded-md">
        <Form method="post" className="w-full max-w-md" onSubmit={handleSubmit}>
          <h1 className="text-2xl md:text-4xl font-bold mb-5 text-center">
            Login Page
          </h1>

          {error && <p className="text-red-500 text-center">{error}</p>}

          <div className="flex flex-col gap-4">
            <FormInput placeholder="Email" name="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <FormInput placeholder="Password" name="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>

          <div className="my-5 flex flex-col gap-3 md:my-10 md:flex-row md:gap-5">
            <button type="submit" className="grow btn btn-primary btn-sm md:btn-md">
              Login
            </button>
            <button type="button" className="grow btn btn-secondary btn-sm md:btn-md flex items-center gap-2 justify-center">
              <FcGoogle className="w-6 h-6" />
              <span>Google</span>
            </button>
          </div>

          <div className="flex justify-between">
            <p className="link-primary">Forget password?</p>
            <Link to="/register" className="link-primary">You don't have an account yet?</Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
