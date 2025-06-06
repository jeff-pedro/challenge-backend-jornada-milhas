// dependencies
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// pages
import Home from 'pages/Home';
import Destination from 'pages/Destination';
// components
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import NotFound from 'pages/NotFound';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='destinations/:id' element={<Destination />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
   
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
