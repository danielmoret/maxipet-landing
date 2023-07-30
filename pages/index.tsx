import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Categories from '../components/Categories';
import Products from '../components/Products';
import cat from '../public/images/products/cat.png';

function HomePage() {
  return (
    <div className="min-h-screen  bg-white flex flex-col dark:bg-black">
      <Navbar />
      <Banner />
      <Categories />
      <Products
        title="productos destacados"
        reverse={false}
        img={cat.src}
        alt="gato"
      />
      <Products title="productos populares" reverse={false} />
      <Products title="últimos productos" reverse img={cat.src} alt="gato" />
    </div>
  );
}

export default HomePage;
