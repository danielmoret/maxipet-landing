import Image from 'next/image';
import dogPawFilled from '../public/images/products/dog-paw-filled.svg';
import dogPawEmpty from '../public/images/products/dog-paw-empty.svg';

interface RatingProps {
  rating: number;
}

const Rating = ({ rating }: RatingProps) => {
  const createRating = (paws: number): number[] => {
    const ratingArr = [1, 1, 1, 1, 1].fill(0, paws);

    return ratingArr;
  };

  return (
    <div className="flex gap-1.5">
      {createRating(rating).map((paw, index) => {
        if (paw === 1) {
          return <Image src={dogPawFilled} alt="dog-paw" key={index} />;
        }
        return <Image src={dogPawEmpty} alt="dog-paw" key={index} />;
      })}
    </div>
  );
};

export default Rating;
