import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { useRegister } from '../hook/useRegister';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Ko‘z ikonalari

function Register() {
  const { registerWithGoogle } = useRegister();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Parolni ko‘rsatish holati
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Tasdiqlash parolni ko‘rsatish holati

  const register = (name, email, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.find(user => user.email === email)) {
      return { success: false, message: 'Bu email allaqachon ro‘yxatdan o‘tgan!' };
    }
    
    const newUser = { name, email, password };
    localStorage.setItem('users', JSON.stringify([...users, newUser]));
    return { success: true };
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      setError('Barcha maydonlarni to‘ldiring!');
      return;
    }

    if (password !== confirmPassword) {
      setError('Parollar mos kelmadi!');
      return;
    }

    const result = register(name, email, password);
    if (!result.success) {
      setError(result.message);
      return;
    }

    setError('');
    navigate('/login');
  };

  return (
    <div className="flex min-h-screen w-full flex-col md:flex-row">
      <div className="hidden md:w-[40%] bg-[url('https://picsum.photos/seed/picsum/600/800')] bg-cover bg-center md:block"></div>
      <div className="flex w-full items-center justify-center md:w-[60%] md:bg-none rounded-md">
        <form className="w-full max-w-md" onSubmit={handleSubmit}>
          <h1 className="text-2xl md:text-4xl font-bold mb-5 text-center">Register Page</h1>
          <div className="flex flex-col gap-4">
            <input
              placeholder="Full Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered w-full" // Umumiy kenglik qo'shildi
              required
            />
            <input
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full" // Umumiy kenglik qo'shildi
              required
            />
            <div className="relative">
              <input
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered w-full" // Umumiy kenglik qo'shildi
                required
              />
              <div
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)} // Ko‘z ikonasi
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
            <div className="relative">
              <input
                placeholder="Confirm Password"
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="input input-bordered w-full" // Umumiy kenglik qo'shildi
                required
              />
              <div
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)} // Ko‘z ikonasi
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
          </div>
          {error && <p className="text-red-500 text-center mt-2">{error}</p>}
          <div className="my-5 flex flex-col gap-3 md:my-10 md:flex-row md:gap-5">
            <button type="submit" className="grow btn btn-primary btn-sm md:btn-md">Register</button>
            <button onClick={registerWithGoogle} type="button" className="grow btn btn-secondary btn-sm md:btn-md flex items-center gap-2 justify-center">
              <FcGoogle className="w-6 h-6" />
              <span>Google</span>
            </button>
          </div>
          <div className='text-center'>
            <Link to='/login' className='link-primary'>You already have an account!</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
