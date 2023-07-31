import Image from 'next/image';
import Link from 'next/link';
import location from '../public/images/navbar/Location-icon.svg';
import instagram from '../public/images/navbar/instagram.svg';
import facebook from '../public/images/navbar/facebook.svg';
import twitter from '../public/images/navbar/twitter.svg';
import angleDown from '../public/images/navbar/angle-down.svg';
import logoMaxipet from '../public/images/navbar/logo-maxipet.png';
import locationInput from '../public/images/navbar/location.svg';
import petIcon from '../public/images/navbar/Pet-icon.svg';
import userIcon from '../public/images/navbar/User.svg';
import shoppingCart from '../public/images/navbar/Shopping-cart.svg';
import search from '../public/images/navbar/Search.svg';

const Navbar = () => (
  <>
    <div className="bg-[#E2081E] flex justify-end gap-5 pe-12 py-1.5">
      <div className="flex gap-2 items-center">
        <Image src={location} alt="location icon " />
        <span className="text-white text-xs font-monserrat">Bello Monte</span>
        <Image src={angleDown} alt="angle down icon " />
      </div>
      <div className="flex gap-2">
        <Image src={instagram} alt="instgram icon" />
        <Image src={twitter} alt="twitter icon" />
        <Image src={facebook} alt="facebook icon" />
      </div>
    </div>
    <div className="flex justify-between items-center flex-wrap px-16 py-5">
      <Image src={logoMaxipet} alt="Maxipet logo" />
      <div className="rounded-md border flex font-monserrat border-[#C8C2BE] px-2 w-1/3 h-8 ">
        <input
          type="text"
          placeholder="Buscador"
          className="h-full w-full focus:outline-none border-none focus:ring-0 placeholder-[#C8C2BE] text-gray-600"
        />
        <Image src={search} alt="search icon" />
      </div>

      <div className="flex gap-2">
        <Image src={locationInput} alt="location icon" />
        <Image src={petIcon} alt="pet icon" />
        <Image src={userIcon} alt="user icon" />
        <Image src={shoppingCart} alt="shopping cart icon" />
      </div>
    </div>
    <div>
      <nav className="p-2">
        <div className="w-full mx-auto overflow-x-auto">
          <ul className="flex items-center justify-evenly text-sm text-[#68605B]">
            <li className="text-center px-2">
              <Link href="" className=" hover:text-gray-300">
                Inicio
              </Link>
            </li>
            <li className="text-center px-2">
              <Link href="#" className=" hover:text-gray-300 ">
                Comprar por Marca
              </Link>
            </li>
            <li className="text-center px-2">
              <Link href="#" className=" hover:text-gray-300 ">
                Comprar por Mascota
              </Link>
            </li>
            <li className="text-center px-2">
              <Link href="#" className=" hover:text-gray-300">
                Nuestros servicios
              </Link>
            </li>
            <li className="text-center px-2">
              <Link href="#" className=" hover:text-gray-300 ">
                Promociones
              </Link>
            </li>
            <li className="text-center px-2">
              <Link href="#" className=" hover:text-gray-300 ">
                Nosotros
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </>
);

export default Navbar;
