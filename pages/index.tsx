import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Categories from '../components/Categories';
import Products from '../components/Products';

function HomePage() {
  return (
    <div className="min-h-screen  bg-white flex flex-col dark:bg-black">
      <Navbar />
      <Banner />
      <Categories />
      <Products title="productos destacados" reverse={false} />
      <Products title="ultimos productos" reverse />
    </div>
  );
}

export default HomePage;
