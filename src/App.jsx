import { createBrowserRouter } from 'react-router-dom';
import Home, { action as HomeAction } from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import MainLeyauts from './Leyauts/MainLeyauts';
import ErrorPage from './pages/ErrorPage';
import LikkedImages from './pages/LikkedImages';
import DowloadImg from './pages/DowloadImg';
import ImgInfo from './pages/ImgInfo';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div className="container mx-auto mt-5">
        <MainLeyauts><Home /></MainLeyauts>
      </div>
    ),
    action: HomeAction, 
  },
  {
    path: '/about',
    element: (
      <div className="container mx-auto mt-5">
        <MainLeyauts><About /></MainLeyauts>
      </div>
    ),
  },
  {
    path: '/contact',
    element: (
      <div className="container mx-auto mt-5">
        <MainLeyauts><Contact /></MainLeyauts>
      </div>
    ),
  },
  {
    path: '/login',
    element: (
      <div className="container mx-auto mt-5">
        <Login />
      </div>
    ),
  },
  {
    path: '/register',
    element: (
      <div className="container mx-auto mt-5">
        <Register />
      </div>
    ),
  },
  {
    path: '*',
    element: (
      <div className="container mx-auto mt-5">
        <MainLeyauts><ErrorPage /></MainLeyauts>
      </div>
    ),
  },
  {
    path: '/dowloadImg',
    element: (
      <div className="container mx-auto mt-5">
        <MainLeyauts><DowloadImg /></MainLeyauts>
      </div>
    ),
  },
  {
    path: '/ImgInfo/:id',
    element: (
      <div className="container mx-auto mt-5">
        <MainLeyauts><ImgInfo /></MainLeyauts>
      </div>
    ),
  },
  {
    path: '/likedImages',
    element: (
      <div className="container mx-auto mt-5">
        <MainLeyauts><LikkedImages /></MainLeyauts>
      </div>
    ),
  },
]);

export default router;
