// dependencies
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// pages
import Home from 'pages/Home';
import Destination from 'pages/Destination';
import NotFound from 'pages/NotFound';
import Register from 'pages/Register';
// components
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import Login from 'pages/Login';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='destinations/:id' element={<Destination />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
   
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
