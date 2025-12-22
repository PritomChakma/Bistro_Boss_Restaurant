import PopularMenu from "../../Components/PopularMenu/PopularMenu";
import Banner from "./Banner";
import Category from "./Category";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="w-11/12 mx-auto">
        <Category></Category>
        <PopularMenu></PopularMenu>
      </div>
    </div>
  );
};

export default Home;
