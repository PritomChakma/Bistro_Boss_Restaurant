import UseMenu from "../../Hooks/UseMenu";
import MenuCard from "../../Shared/MenuCard/MenuCard";
import SectionTitle from "../SectionTitle/SectionTitle";

const PopularMenu = () => {
  const [menu] = UseMenu();
  const PopularMenu = menu.filter((items) => items.category == "popular");
  console.log(PopularMenu);
  return (
    <div className="my-10">
      <SectionTitle
        subHeading={"Check it out"}
        Heading={"FROM OUR MENU"}
      ></SectionTitle>

      <div className="grid md:grid-cols-2  gap-5">
        {PopularMenu.map((item) => (
          <MenuCard item={item} key={item._id}></MenuCard>
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;
