import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FcGoogle } from 'react-icons/fc';
import { useRegister } from '../hook/useRegister';
import { login } from '../store/authSlice';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Ko‘z ikonalari

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { registerWithGoogle } = useRegister();

  // Input state-lari
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [forgotEmail, setForgotEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Parolni ko‘rsatish holati

  // ✅ Login funksiyasi
  const handleSubmit = (event) => {
    event.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);

    if (!user) {
      setError("Email yoki parol noto‘g‘ri!");
      return;
    }

    dispatch(login("fake-token")); // Redux orqali login qilish
    localStorage.setItem("userToken", "fake-token"); // Tokenni saqlash
    setError('');
    navigate('/'); // Home sahifaga yo‘naltirish
  };

  // ✅ Parolni unutgan bo‘lsa
  const handleForgotPassword = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === forgotEmail);

    if (!user) {
      alert("Bu email tizimda mavjud emas!");
      return;
    }

    alert(`Sizning parolingiz: ${user.password}`);
  };

  return (
    <div className="flex min-h-screen w-full flex-col md:flex-row">
      {/* ✅ Chap tarafdagi rasm */}
      <div className="hidden md:w-[40%] bg-[url('https://picsum.photos/seed/picsum/600/800')] bg-cover bg-center md:block"></div>

      {/* ✅ Login form */}
      <div className="flex w-full items-center justify-center md:w-[60%] md:bg-none rounded-md">
        <form className="w-full max-w-md" onSubmit={handleSubmit}>
          <h1 className="text-2xl md:text-4xl font-bold mb-5 text-center">Login Page</h1>
          {error && <p className="text-red-500 text-center">{error}</p>}

          {/* ✅ Inputlar */}
          <div className="flex flex-col gap-4">
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
                type={showPassword ? "text" : "password"} // Agar ko‘z bosilgan bo‘lsa, parolni ko‘rsat
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
          </div>

          <div className="my-5 flex flex-col gap-3 md:my-10 md:flex-row md:gap-5">
            <button type="submit" className="grow btn btn-primary btn-sm md:btn-md">
              Login
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

          <div className="flex justify-between">
            <button
              type="button"
              className="link-primary"
              onClick={() => {
                const email = prompt("Emailingizni kiriting:");
                setForgotEmail(email);
                handleForgotPassword();
              }}
            >
              Forget password?
            </button>
            <Link to="/register" className="link-primary">
              You don't have an account yet?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
