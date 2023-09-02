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
    <section className="w-full flex xl:flex-col justify-center gap-5 max-container p-4">
      <div>
        <SimpleImageSlider
          width={1500}
          height={570}
          images={images}
          showBullets={true}
          showNavs={true}
        />
      </div>
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img15/zak/igd/WhatsApp_Image_2023-09-01_at_6.07.58_PM.jpeg" alt="banner" className="w-[1500] justify-center p-4" />
    </section>
  )
}

export default Hero