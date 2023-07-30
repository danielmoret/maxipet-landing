import Image from 'next/image';
import brand1 from '../public/images/brands/brand1.png';

const Brands = () => (
  <section className="px-5 lg:px-36 mt-32">
    <p className="text-sm text-[#867D77]">Lorem ipsum dolor sit amet. </p>
    <p className="text-xl text-[#E2081E] font-monserrat font-bold uppercase ">
      trabajamos con las mejores marcas
    </p>
    <div className="mt-9 flex flex-col xl:flex-row">
      <p className="font-normal text-base text-[#333] xl:w-1/3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In velit ut
        viverra fames sed.
      </p>
      <div className="flex mt-5 justify-between overflow-x-auto gap-20 w-full xl:ms-14  xl:mt-0 lg:overflow-x-hidden">
        <Image src={brand1} alt="choice nutrition" />
        <Image src={brand1} alt="choice nutrition" />
        <Image src={brand1} alt="choice nutrition" />
        <Image src={brand1} alt="choice nutrition" />
      </div>
    </div>
  </section>
);

export default Brands;
