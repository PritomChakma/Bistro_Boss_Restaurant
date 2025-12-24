import { Helmet } from "react-helmet-async";
import coverImg from "../../assets/menu/banner3.jpg";
import DessertImg from "../../assets/menu/dessert-bg.jpeg";
import PizzaImg from "../../assets/menu/pizza-bg.jpg";
import {
  default as SaladImg,
  default as SoupImg,
} from "../../assets/menu/salad-bg.jpg";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import UseMenu from "../../Hooks/UseMenu";
import Cover from "../../Shared/Cover/Cover";
import MenuCategory from "../../Shared/MenuCategory/MenuCategory";
const Menu = () => {
  const [menu] = UseMenu();
  const offered = menu.filter((items) => items.category == "offered");
  const dessert = menu.filter((items) => items.category == "dessert");
  const Pizza = menu.filter((items) => items.category == "pizza");
  const Salad = menu.filter((items) => items.category == "salad");
  const Soup = menu.filter((items) => items.category == "soup");

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
      <SectionTitle
        subHeading="Don't Miss"
        Heading="TODAY'S OFFER"
      ></SectionTitle>

      {/* offered */}
      <MenuCategory items={offered}></MenuCategory>

      {/* dessert  */}
      <MenuCategory
        title="Dessert"
        subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        img={DessertImg}
        items={dessert}
      ></MenuCategory>

      {/* Pizza  */}
      <MenuCategory
        title="Pizza"
        subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        img={PizzaImg}
        items={Pizza}
      ></MenuCategory>

      {/* Salad  */}
      <MenuCategory
        title="Salad"
        subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        img={SaladImg}
        items={Salad}
      ></MenuCategory>

      {/* Soup  */}
      <MenuCategory
        title="Soup"
        subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        img={SoupImg}
        items={Soup}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
