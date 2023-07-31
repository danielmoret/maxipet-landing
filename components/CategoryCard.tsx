interface CategoryCardProps {
  name: string;
  image: {
    src: string;
  };
}

const CategoryCard = ({ name, image }: CategoryCardProps) => (
  <div className="flex flex-col items-center  justify-center">
    <img src={image.src} alt={name} />
    <span>{name}</span>
  </div>
);

export default CategoryCard;
