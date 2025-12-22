import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import slider1 from "../../assets/home/slide1.jpg";
import slider2 from "../../assets/home/slide2.jpg";
import slider3 from "../../assets/home/slide3.jpg";
import slider4 from "../../assets/home/slide4.jpg";
import slider5 from "../../assets/home/slide5.jpg";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const images = [
  { img: slider1, title: "Salads" },
  { img: slider2, title: "Pizza" },
  { img: slider3, title: "Soups" },
  { img: slider4, title: "desserts" },
  { img: slider5, title: "Salad" },
];

const Category = () => {
  return (
    <div>
      <SectionTitle
        subHeading={"From 11:00am to 10:00pm"}
        Heading={"ORDER ONLINE"}
      ></SectionTitle>

      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {images.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex justify-center">
              {/* Image */}
              <img src={item.img} alt={item.title} />

              {/* Overlay */}
              <div className="absolute inset-0  flex items-end mb-10 uppercase font-bold justify-center">
                <h3 className="text-white text-2xl font-semibold tracking-wide">
                  {item.title}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Category;
