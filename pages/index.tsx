import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Ads from '../components/Ads';
import Services from '../components/Services';
import cat from '../public/images/products/cat.png';
import ad1 from '../public/images/ads/ad1.png';
import ad2 from '../public/images/ads/ad2.png';

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
      <Ads img={ad1} alt="comida de perro" />
      <Products title="productos populares" reverse={false} />
      <Ads img={ad2} alt="perro jugando" />
      <Products title="últimos productos" reverse img={cat.src} alt="gato" />
      <Services />
    </div>
  );
}

export default HomePage;
