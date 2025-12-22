const MenuCard = ({ items }) => {
  const { image, name, recipe, price } = items;
  return (
    <div className="flex space-x-4 items-center">
      <img
        style={{ borderRadius: "0 200Px 200px 200px" }}
        className="w-[100px]"
        src={image}
        alt=""
      />

      <div>
        <p className="uppercase font-semibold">{name} ------------</p>
        <h1 className="text-[#737373]">{recipe}</h1>
      </div>
      <p className="text-[#BB8506]">${price}</p>
    </div>
  );
};

export default MenuCard;
