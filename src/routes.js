import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element="Página não encontrada..." />
      </Routes>
   
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
