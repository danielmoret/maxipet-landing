import productStyles from './styles/productcard.module.css';

interface CategoryCardProps {
  name: string;
  image: {
    src: string;
  };
}

const CategoryCard = ({ name, image }: CategoryCardProps) => (
  <div className="flex flex-col items-center  justify-center  pb-3">
    <img src={image.src} alt={name} className={productStyles.width__image} />
    <span>{name}</span>
  </div>
);

export default CategoryCard;
