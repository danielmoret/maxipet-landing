import FacebookIcon from './Icons/FacebookIcon';
import InstagramIcon from './Icons/InstagramIcon';
import TwitterIcon from './Icons/TwitterIcon';
import AvilaTekIcon from './Icons/AvilaTekIcon';
import DogHouseIcon from './Icons/DogHouseIcon';
import TreeIcon from './Icons/TreeIcon';

const Footer = () => (
  <footer>
    <div className="px-5 grid grid-cols-1 lg:grid-cols-4 lg:px-16 mt-32 my-16 gap-x-28">
      <div>
        <p className="font-monserrat text-[#E2081E] text-lg font-semibold">
          Sobre nosotros
        </p>
        <p className="font-normal text-xs mt-5  text-[#867D77]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus molestie
          rhoncus id nunc, porta leo tempus facilisi.
        </p>
      </div>
      <div className="mt-5 lg:mt-0">
        <p className="font-monserrat text-[#E2081E] text-lg font-semibold">
          Mi cuenta
        </p>
        <p className="font-normal text-xs mt-5 text-[#867D77]">
          Información personal
        </p>
        <p className="font-normal text-xs  text-[#867D77] mt-2.5">
          Direcciones
        </p>
        <p className="font-normal text-xs  text-[#867D77] mt-2.5">Mascotas</p>
        <p className="font-normal text-xs  text-[#867D77] mt-2.5">Órdenes</p>
        <p className="font-normal text-xs  text-[#867D77] mt-2.5">Agenda</p>
      </div>
      <div className="mt-5 lg:mt-0">
        <p className="font-monserrat text-[#E2081E] text-lg font-semibold">
          Información
        </p>
        <p className="font-normal text-xs mt-5 text-[#867D77]">
          Formulario de contacto
        </p>
        <p className="font-normal text-xs  text-[#867D77] mt-2.5">
          Preguntas frecuentes
        </p>
        <p className="font-normal text-xs  text-[#867D77] mt-2.5">
          Términos y condiciones
        </p>
        <p className="font-normal text-xs  text-[#867D77] mt-2.5">
          Política de privacidad
        </p>
      </div>
      <div className="mt-5 lg:mt-0">
        <p className="font-monserrat text-[#E2081E] text-lg font-semibold">
          Atención al cliente
        </p>
        <p className="font-normal text-xs mt-5 text-[#867D77]">
          Bello Monte, calle XXXX, local 1
        </p>
        <p className="font-normal text-xs  text-[#867D77] mt-2.5">
          (0212) 575 54 12
        </p>
        <p className="font-normal text-xs mt-2.5 text-[#867D77]">
          soporte@maxipet.com
        </p>
        <p className="font-normal text-xs mt-2.5 text-[#867D77]">
          Lunes a Viernes
        </p>
        <p className="font-normal text-xs mt-2.5 text-[#867D77]">
          9:00 a.m. - 5:00 p.m.
        </p>
        <div className="flex gap-3 mt-2.5">
          <InstagramIcon />
          <TwitterIcon />
          <FacebookIcon />
        </div>
      </div>
    </div>
    <div className="flex justify-between items-baseline px-16 md:px-36">
      <DogHouseIcon />
      <TreeIcon />
    </div>

    <div className="bg-[#E2081E] flex justify-center gap-1 pe-12 py-1.5 px-16">
      <div className="text-white font-normal text-xs inline-block">
        Copyright © 2021 Maxi Pet. Todos los Derechos Reservados. Desarrollado
        por Avila Tek <AvilaTekIcon />
      </div>
    </div>
  </footer>
);

export default Footer;
