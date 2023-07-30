import Image from 'next/image';
import dogIcon from '../public/images/categories/dog-icon.png';
import CategoryCard from './CategoryCard';

const Categories = () => (
  <section className="px-36 mt-20">
    <p className="text-sm text-[#867D77]">Lorem ipsum dolor sit amet. </p>
    <p className="text-xl text-[#E2081E] font-monserrat font-bold">
      UNA GRAN VARIEDAD DE CATEGORÍAS
    </p>
    <section className="flex justify-center gap-10 mt-4">
      <CategoryCard name="Perros" image={dogIcon} />
      <CategoryCard name="Gatos" image={dogIcon} />
      <CategoryCard name="Peces" image={dogIcon} />
      <CategoryCard name="Roedores" image={dogIcon} />
      <CategoryCard name="Reptiles" image={dogIcon} />
      <CategoryCard name="Aves" image={dogIcon} />
    </section>
  </section>
);

export default Categories;
