import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Components/Provider/AuthProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const FoodCard = ({ item }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate("/");
  const location = useLocation();
  const axiosSecure = useAxiosSecure()
  const { image, name, recipe, price, _id } = item;

  const handleAddCart = (food) => {
    // send Food in database
    console.log(food);
    if (user && user.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        price,
        image,
      };

      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: `${name} is Sucessfully added`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
    } else {
      Swal.fire({
        title: "You are not Logged in",
        text: "Please login to add cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
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
