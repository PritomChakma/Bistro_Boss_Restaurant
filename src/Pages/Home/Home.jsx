import PopularMenu from "../../Components/PopularMenu/PopularMenu";
import Banner from "./Banner";
import Category from "./Category";
import FeaturedMenu from "./FeaturedMenu/FeaturedMenu";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="w-11/12 mx-auto">
        <Category></Category>
        <PopularMenu></PopularMenu>
      </div>
      <FeaturedMenu></FeaturedMenu>
    </div>
  );
};

export default Home;
