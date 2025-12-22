import { useEffect, useState } from "react";
import MenuCard from "../../Shared/MenuCard/MenuCard";
import SectionTitle from "../SectionTitle/SectionTitle";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const PopularItems = data.filter((item) => item.category == "popular");
        setMenu(PopularItems);
      });
  }, []);

  return (
    <div className="my-10">
      <SectionTitle
        subHeading={"Check it out"}
        Heading={"FROM OUR MENU"}
      ></SectionTitle>

      <div className="grid md:grid-cols-2  gap-5">
        {menu.map((items) => (
          <MenuCard items={items} key={items._id}></MenuCard>
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;
