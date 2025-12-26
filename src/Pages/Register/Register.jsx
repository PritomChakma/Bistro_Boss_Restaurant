import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import RegisterBg from "../../assets/others/authentication.png";
import RegisterImg from "../../assets/others/authentication1.png";
import { AuthContext } from "../../Components/Provider/AuthProvider";

const Register = () => {
  const { createUser, profileUpdate } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    console.log(name, email, photo, password);

    createUser(email, password)
      .then((result) => {
        console.log("User created:", result.user);

        profileUpdate(name, photo)
          .then(() => {
            console.log("Profile Updated");
          })
          .catch((error) => {
            console.log("Profile update failed:", error.message);
          });
        navigate("/");
      })
      .catch((error) => {
        console.log("Register failed:", error.message);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Register</title>
      </Helmet>
      <div
        className="min-h-screen flex items-center justify-center p-6"
        style={{
          backgroundImage: `url(${RegisterBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero bg-opacity-60 login backdrop-blur-md rounded-2xl shadow-2xl p-10 max-w-4xl w-full">
          <div className="hero-content flex-col lg:flex-row-reverse gap-16">
            {/* Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src={RegisterImg}
                alt="register-img"
                className="w-80 drop-shadow-lg"
              />
            </div>

            {/* Form */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold mb-2">Create Account 🚀</h2>
              <p className="text-sm text-gray-500 mb-6">
                Register to get started
              </p>
              <form onSubmit={handleRegister} className="space-y-5">
                <div>
                  <label className="label font-semibold text-sm">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="input input-bordered w-full"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <label className="label font-semibold text-sm">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input input-bordered w-full"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                {/* 📌 New added Input for Photo URL */}
                <div>
                  <label className="label font-semibold text-sm">
                    Photo URL
                  </label>
                  <input
                    type="text"
                    name="photo"
                    className="input input-bordered w-full"
                    placeholder="Enter your profile photo URL"
                  />
                </div>

                <div>
                  <label className="label font-semibold text-sm">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="input input-bordered w-full"
                    placeholder="Create a password"
                    required
                  />
                </div>

                <button className="btn btn-neutral w-full mt-2 hover:scale-[1.02] transition">
                  Register
                </button>
              </form>

              <p className="mt-4 text-center text-sm text-gray-600">
                Already have an account?{" "}
                <Link to="/login" className="link link-hover font-medium">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
