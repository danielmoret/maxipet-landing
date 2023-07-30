import React, { useState } from 'react';
import bannerPerro from '../public/images/banner/bannerperro.jpg';

const Banner = () => {
  const slides = [
    {
      url: bannerPerro,
    },
    {
      url: bannerPerro,
    },
    {
      url: bannerPerro,
    },

    {
      url: bannerPerro,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div className=" h-[580px] w-full relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url.src})` }}
        className="w-full h-full bg-center bg-cover duration-500"
      />
      <div className="flex gap-4 justify-center py-2 absolute w-full bottom-4">
        {slides.map((slide, slideIndex) => (
          <button
            key={slideIndex}
            type="button"
            onClick={() => goToSlide(slideIndex)}
            className={`rounded-full text-white w-[50px] h-[6px] ${
              slideIndex === currentIndex ? 'bg-[#E2081E]' : 'bg-[#DAD6D3]'
            }`}
          >
            <span className="hidden">h</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Banner;
