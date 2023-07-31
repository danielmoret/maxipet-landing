import Image from 'next/image';
import shoppingCart from '../public/images/products/shopping-cart.svg';
import Rating from './Rating';
import productStyles from './styles/productcard.module.css';

interface ProductCardProps {
  name: string;
  image: {
    src: string;
  };
  price: string;
  rating: number;
}

const ProductCard = ({ name, image, price, rating }: ProductCardProps) => (
  <div className="flex flex-col items-center justify-center">
    <img src={image.src} alt={name} className={productStyles.width__image} />
    <div className="flex flex-col">
      <span className="font-monserrat text-sm font-medium">{name}</span>
      <Rating rating={rating} />
      <span className="font-monserrat text-sm font-normal text-[#5F5F5F]">
        ${price}
      </span>
    </div>

    <button type="button" className="btn bg-[#E2081E] text-white rounded-md">
      <div className="flex py-1.5 px-5 gap-2">
        <Image src={shoppingCart} alt={name} />
        <span className="font-monserrat text-xs font-medium">Agregar</span>
      </div>
    </button>
  </div>
);

export default ProductCard;
