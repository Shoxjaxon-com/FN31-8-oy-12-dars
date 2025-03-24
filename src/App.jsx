import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import MainLeyauts from './Leyauts/MainLeyauts';
import ErrorPage from './pages/ErrorPage';
import LikedImages from './pages/LikkedImages';
import DowloadImg from './pages/DowloadImg';
import ImgInfo from './pages/ImgInfo';
import ProtectedRoute from './componets/ProtectedRoute';
import Navbar from './componets/Navbar';

const withContainer = (Component) => (
  <MainLeyauts>
    <div className="container mx-auto">
      <Component />
    </div>
  </MainLeyauts>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        {withContainer(Home)}
      </ProtectedRoute>
    ),
  },
  {
    path: '/about',
    element: (
      <ProtectedRoute>
        {withContainer(About)}
      </ProtectedRoute>
    ),
  },
  {
    path: '/contact',
    element: (
      <ProtectedRoute>
        {withContainer(Contact)}
      </ProtectedRoute>
    ),
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
  {
    path: '/dowloadImg',
    element: (
      <ProtectedRoute>
        {withContainer(DowloadImg)}
      </ProtectedRoute>
    ),
  },
  {
    path: '/ImgInfo/:id',
    element: (
      <ProtectedRoute>
        {withContainer(ImgInfo)}
      </ProtectedRoute>
    ),
  },
  {
    path: '/likedImages',
    element: (
      <ProtectedRoute>
        {withContainer(LikedImages)}
      </ProtectedRoute>
    ),
  },
]);

export default router;
