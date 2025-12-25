import { Link } from "react-router-dom";
import Cover from "../Cover/Cover";
import MenuCard from "../MenuCard/MenuCard";

const MenuCategory = ({ items, title, subTitle, img }) => {
  return (
    <div className="my-10">
      {title && <Cover title={title} img={img} subTitle={subTitle}></Cover>}
      <div className="grid md:grid-cols-2  gap-5 my-16">
        {items.map((item) => (
          <MenuCard item={item} key={item._id}></MenuCard>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <Link to={`/oder/${title}`}>
          <button className="btn btn-outline border-0 rounded-lg border-b-4 ">
            Oder Your Favourite Food
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
