import Image from 'next/image';
import location from '../public/images/navbar/location-icon.svg';
import instagram from '../public/images/navbar/instagram.svg';
import facebook from '../public/images/navbar/facebook.svg';
import twitter from '../public/images/navbar/twitter.svg';
import angleDown from '../public/images/navbar/angle-down.svg';
import logoMaxipet from '../public/images/navbar/logo-maxipet.png';
import locationInput from '../public/images/navbar/location.svg';
import petIcon from '../public/images/navbar/pet-icon.svg';
import userIcon from '../public/images/navbar/user.svg';
import shoppingCart from '../public/images/navbar/shopping-cart.svg';
import search from '../public/images/navbar/search.svg';

const Navbar = () => (
  <>
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
    <div className="flex justify-between items-center flex-wrap px-16 py-5">
      <Image src={logoMaxipet} />
      <div className="rounded-md border flex font-monserrat border-[#C8C2BE] px-2 w-1/3 h-8 ">
        <input
          type="text"
          placeholder="Buscador"
          className="h-full w-full focus:outline-none border-none focus:ring-0 placeholder-[#C8C2BE] text-gray-600"
        />
        <Image src={search} />
      </div>

      <div className="flex gap-2">
        <Image src={locationInput} />
        <Image src={petIcon} />
        <Image src={userIcon} />
        <Image src={shoppingCart} />
      </div>
    </div>
  </>
);

export default Navbar;
