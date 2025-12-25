import LoginBg from "../../assets/others/authentication.png";
import LoginImg from "../../assets/others/authentication1.png";

const Login = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      style={{
        backgroundImage: `url(${LoginBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero bg-opacity-60 login backdrop-blur-md rounded-2xl shadow-2xl p-10 max-w-4xl w-full">
        <div className="hero-content flex-col lg:flex-row-reverse gap-16">
          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={LoginImg}
              alt="login-img"
              className="w-80 drop-shadow-lg"
            />
          </div>

          {/* Form Card */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold text-neutral mb-2">
              Welcome Back 👋
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Login to manage your account
            </p>

            <form className="space-y-5">
              <div>
                <label className="label font-semibold text-sm">Email</label>
                <input
                  type="email"
                  className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-neutral focus:border-neutral"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="label font-semibold text-sm">Password</label>
                <input
                  type="password"
                  className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-neutral focus:border-neutral"
                  placeholder="Enter your password"
                />
              </div>

              <div className="flex justify-end">
                <a className="link link-hover text-sm text-neutral">
                  Forgot password?
                </a>
              </div>

              <button className="btn btn-neutral w-full mt-2 hover:scale-[1.02] transition">
                Login
              </button>
            </form>

            <p className="mt-4 text-center text-sm text-gray-600">
              New here?{" "}
              <a className="link link-hover font-medium text-neutral">
                Create an account
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
