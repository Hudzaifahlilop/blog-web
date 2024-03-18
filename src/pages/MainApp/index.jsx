import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CreateBlog from '../CreateBlog';
import DetailBlog from '../DetailBlog';
import Home from '../Home';
import { Footer, Header } from '../../components';

// Asumsikan BrowserRouter sudah didefinisikan di komponen tingkat atas

const MainApp = () => {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <div className='flex-1 overflow-y-auto'>
        <Routes>
          <Route path='/create-blog/:id?' element={<CreateBlog />} />
          <Route path='/detail-blog/:id' element={<DetailBlog />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default MainApp;
