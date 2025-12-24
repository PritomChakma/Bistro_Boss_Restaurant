import Cover from "../Cover/Cover";
import MenuCard from "../MenuCard/MenuCard";

const MenuCategory = ({ items, title, subTitle , img }) => {
  return (
    <div>
      {title && <Cover title={title} img={img} subTitle={subTitle}></Cover>}
      <div className="grid md:grid-cols-2  gap-5 my-16">
        {items.map((item) => (
          <MenuCard item={item} key={item._id}></MenuCard>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
