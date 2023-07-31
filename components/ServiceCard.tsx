import Image, { StaticImageData } from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: StaticImageData;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => (
  <div className="flex flex-col gap-x-24 text-[#333]">
    <Image src={icon} alt="servicio" />
    <p className="font-monserrat text-base font-semibold ">{title}</p>
    <p className="font-normal text-xs mt-2.5">{description}</p>
  </div>
);

export default ServiceCard;
