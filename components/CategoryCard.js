import Image from 'next/image';

const CategoryCard = ({ name, image }) => (
  <div className="flex flex-col items-center  justify-center">
    <Image src={image} />
    <span>{name}</span>
  </div>
);

export default CategoryCard;
