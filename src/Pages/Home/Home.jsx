import PopularMenu from "../../Components/PopularMenu/PopularMenu";
import Rating from "../../Components/Rating/Rating";
import Banner from "./Banner";
import CallUs from "./CallUs";
import Category from "./Category";
import FeaturedMenu from "./FeaturedMenu/FeaturedMenu";
import HeroBanner from "./HeroBanner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="w-11/12 mx-auto">
        <Category></Category>
        <HeroBanner></HeroBanner>
        <PopularMenu></PopularMenu>
        <CallUs></CallUs>
      </div>
      <FeaturedMenu></FeaturedMenu>
      <Rating></Rating>
    </div>
  );
};

export default Home;
