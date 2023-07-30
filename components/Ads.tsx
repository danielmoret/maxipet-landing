interface AdsProps {
  img: {
    src: string;
  };
  alt: string;
}

const Ads = ({ img, alt }: AdsProps) => (
  <section className="px-5 lg:px-36 mt-20">
    <img src={img.src} alt={alt} className="w-full" />
  </section>
);

export default Ads;
