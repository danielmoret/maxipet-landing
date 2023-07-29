import Image from 'next/image';
import location from '../public/images/navbar/Location-icon.svg';
import instagram from '../public/images/navbar/instagram.svg';
import facebook from '../public/images/navbar/facebook.svg';
import twitter from '../public/images/navbar/twitter.svg';
import angleDown from '../public/images/navbar/angle-down.svg';

const Navbar = () => (
  <div className="bg-[#E2081E] flex justify-end gap-5 pe-12 py-1.5">
    <div className="flex gap-2 items-center">
      <Image src={location} />
      <span className="text-white text-xs font-monserrat">Bello Monte</span>
      <Image src={angleDown} />
    </div>
    <div className="flex gap-2">
      <Image src={instagram} />
      <Image src={twitter} />
      <Image src={facebook} />
    </div>
  </div>
);

export default Navbar;
