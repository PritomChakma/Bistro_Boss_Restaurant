const FoodCard = ({ item }) => {
  const { image, name, recipe, price } = item;

  const handleAddCart = (food) => {
    console.log(food);
  };

  return (
    <div className="w-80 bg-base-100 shadow-md rounded-md overflow-hidden">
      {/* Image with price badge */}
      <div className="relative">
        <img src={image} alt={name} className="w-full h-56 object-cover" />

        <span className="absolute top-3 right-3 bg-black text-white text-sm px-3 py-1 rounded-md">
          ${price}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h2 className="text-xl text-center font-semibold">{name}</h2>

        <p className="text-gray-600 text-center text-sm mt-2">{recipe}</p>

        {/* Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => handleAddCart(item)}
            className="px-8 py-2 border border-yellow-700 text-yellow-700 rounded-md hover:bg-yellow-700 hover:text-white transition"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
