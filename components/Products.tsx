import ProductCard from './ProductCard';
import puppyChiot from '../public/images/products/puppy-chiot.png';

interface ProductsProps {
  title: string;
  reverse: boolean;
  img?: string;
  alt?: string;
}

const Products = ({ title, reverse, img, alt }: ProductsProps) => (
  <section className="px-5 lg:px-36 mt-20">
    <p className="text-sm text-[#867D77]">Lorem ipsum dolor sit amet. </p>
    <p className="text-xl text-[#E2081E] font-monserrat font-bold uppercase ">
      {title}
    </p>
    <div
      className={`flex justify-between mt-5 ${reverse && 'flex-row-reverse'}`}
    >
      <img src={img} alt={alt} className="hidden lg:inline-block" />
      <div
        className={`${
          !reverse ? 'ms-10' : 'me-10'
        } gap-10  w-full flex overflow-x-auto justify-between  ${
          img &&
          'lg:grid lg:grid-cols-2 xl:lg:grid-cols-3  place-content-between  lg:overflow-x-hidden'
        }`}
      >
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
