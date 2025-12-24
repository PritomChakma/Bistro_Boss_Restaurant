import { Helmet } from "react-helmet-async";
import coverImg from "../../assets/menu/banner3.jpg";
import PopularMenu from "../../Components/PopularMenu/PopularMenu";
import Cover from "../../Shared/Cover/Cover";
const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>

      <Cover
        img={coverImg}
        title="our menu"
        subTitle="Would You Like Try Dish?"
      ></Cover>
      <PopularMenu></PopularMenu>
      <Cover
        img={coverImg}
        title="our menu"
        subTitle="Would You Like Try Dish?"
      ></Cover>
      <PopularMenu></PopularMenu>
      <Cover
        img={coverImg}
        title="our menu"
        subTitle="Would You Like Try Dish?"
      ></Cover>
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default Menu;
