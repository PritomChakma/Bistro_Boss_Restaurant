import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";

const FeaturedMenu = () => {
  return (
    <div className="featured bg-fixed text-white">
      {/* overlay */}
      <div className="bg-[rgba(21,21,21,0.7)] w-full  py-20">
        <SectionTitle
          subHeading={"Check it Out"}
          Heading={"From Our Menu"}
        />

        <div className="max-w-6xl mx-auto px-6 md:flex items-center gap-10 mt-12">
          {/* image */}
          <img
            className="w-full md:w-[500px] h-[350px] object-cover rounded-lg shadow-lg"
            src={featuredImg}
            alt="featured"
          />

          {/* content */}
          <div className="mt-6 md:mt-0">
            <p className="text-sm text-gray-300 mb-2">
              December 22, 2025
            </p>

            <h3 className="text-2xl font-semibold mb-4">
              WHERE CAN I GET SOME?
            </h3>

            <p className="text-gray-300 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Error voluptate facere, deserunt dolores maiores quod
              nobis quas quasi. Eaque repellat recusandae ad laudantium
              tempore consequatur consequuntur omnis ullam maxime tenetu.
            </p>

            <button className="btn btn-outline border-0 rounded-lg border-b-4">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedMenu;

