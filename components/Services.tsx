import ServiceCard from './ServiceCard';
import serviceIcon from '../public/images/services/service.png';

const Services = () => (
  <section className="px-5 lg:px-36 mt-20">
    <p className="text-sm text-[#867D77]">Lorem ipsum dolor sit amet. </p>
    <p className="text-xl text-[#E2081E] font-monserrat font-bold uppercase ">
      nuestros servicios
    </p>
    <p className="text-sm text-[#333] mt-5">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In velit ut
      viverra fames sed.
    </p>
    <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
      <ServiceCard
        title="Peluquería"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus molestie
      rhoncus id nunc, porta leo tempus facilisi."
        icon={serviceIcon}
      />
      <ServiceCard
        title="Odontología"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus molestie
      rhoncus id nunc, porta leo tempus facilisi."
        icon={serviceIcon}
      />
      <ServiceCard
        title="Veterinario"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus molestie
      rhoncus id nunc, porta leo tempus facilisi."
        icon={serviceIcon}
      />
      <ServiceCard
        title="Entrenamiento"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus molestie
      rhoncus id nunc, porta leo tempus facilisi."
        icon={serviceIcon}
      />
      <ServiceCard
        title="Psicología canina"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus molestie
      rhoncus id nunc, porta leo tempus facilisi."
        icon={serviceIcon}
      />
      <ServiceCard
        title="Fiestas de cumpleaños"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus molestie
      rhoncus id nunc, porta leo tempus facilisi."
        icon={serviceIcon}
      />
    </div>
  </section>
);

export default Services;
