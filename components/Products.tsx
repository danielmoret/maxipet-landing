import Image from 'next/image';
import ProductCard from './ProductCard';
import cat from '../public/images/products/cat.png';
import puppyChiot from '../public/images/products/puppy-chiot.png';

interface ProductsProps {
  title: string;
  reverse: boolean;
}

const Products = ({ title, reverse }: ProductsProps) => (
  <section className="px-5 lg:px-36 mt-20">
    <p className="text-sm text-[#867D77]">Lorem ipsum dolor sit amet. </p>
    <p className="text-xl text-[#E2081E] font-monserrat font-bold uppercase ">
      {title}
    </p>
    <div
      className={`flex justify-between mt-5 ${reverse && 'flex-row-reverse'}`}
    >
      <Image src={cat} alt="cat" className="hidden lg:inline-block" />
      <div className="ms-10 flex lg:grid lg:grid-cols-2 xl:lg:grid-cols-3  gap-10 w-full overflow-x-scroll lg:overflow-x-hidden">
        <ProductCard
          name="1st Choice Puppy Chiot"
          image={puppyChiot}
          price="9.99"
          rating={3}
        />
        <ProductCard
          name="1st Choice Puppy Chiot"
          image={puppyChiot}
          price="9.99"
          rating={3}
        />
        <ProductCard
          name="1st Choice Puppy Chiot"
          image={puppyChiot}
          price="9.99"
          rating={3}
        />
        <ProductCard
          name="1st Choice Puppy Chiot"
          image={puppyChiot}
          price="9.99"
          rating={3}
        />
        <ProductCard
          name="1st Choice Puppy Chiot"
          image={puppyChiot}
          price="9.99"
          rating={3}
        />
        <ProductCard
          name="1st Choice Puppy Chiot"
          image={puppyChiot}
          price="9.99"
          rating={3}
        />
      </div>
    </div>
  </section>
);

export default Products;
