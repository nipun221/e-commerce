import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "https://www.evetech.co.za/repository/ProductImages/nvidia-rtx-4080-laptop-banner-deals-980px-v1.jpg" },
  { url: "https://cdn.mos.cms.futurecdn.net/RNwXBYNcunuoMQPNHqVMR3-1200-80.jpg" },
  { url: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/audio/MVRstore/1242x450_banner_2.jpg" },
  { url: "https://m.media-amazon.com/images/G/31/img21/VGSW/2023/Q3/1242X450._CB597147755_.png" },
  { url: "https://m.media-amazon.com/images/G/31/img21/VGSW/2023/Q2/AMZ_COOP_Xbox-Ghoul-banners_1242x450px_26May._CB588223453_.jpg" },
];

const Hero = () => {
  return (
    <section className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-20 max-container">
      <div className="">
        <SimpleImageSlider
          width={1500}
          height={570}
          images={images}
          showBullets={true}
          showNavs={true}
        />
      </div>
    </section>
  )
}

export default Hero