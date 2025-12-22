import { Carousel } from "react-responsive-carousel";
// import { withKnobs, boolean, number, text } from "@storybook/addon-knobs";

// Images
import img1 from "../../assets/home/01.jpg";
import img2 from "../../assets/home/02.jpg";
import img3 from "../../assets/home/03.png";
import img4 from "../../assets/home/04.jpg";
import img5 from "../../assets/home/05.png";
import img6 from "../../assets/home/06.png";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel CSS

const images = [img1, img2, img3, img4, img5, img6];

const createCarouselItemImage = (src, index) => (
  <div key={index}>
    <img src={src} alt={`slide-${index}`} />
  </div>
);

const Banner = () => {
  return (
    <Carousel
      showArrows={true}
      showStatus={true}
      showIndicators={true}
      infiniteLoop={true}
      showThumbs={true}
      useKeyboardArrows={true}
      autoPlay={true}
      stopOnHover={true}
      swipeable={true}
      dynamicHeight={true}
      emulateTouch={true}
      autoFocus={false}
      interval={3000}
      transitionTime={500}
    >
      {images.map(createCarouselItemImage)}
    </Carousel>
  );
};

export default Banner;
