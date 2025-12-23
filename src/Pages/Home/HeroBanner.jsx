import heroBanner from "../../assets/home/chef-service.jpg";

const HeroBanner = () => {
  return (
    <div className="my-20 relative">
      <img src={heroBanner} alt="" className="w-full" />

      <div
        className="absolute top-1/2 left-1/2 
                      -translate-x-1/2 -translate-y-1/2
                      w-7/12 bg-white text-center p-10 rounded"
      >
        <h1 className="text-4xl font-bold mb-4">Bistro Boss</h1>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
};

export default HeroBanner;
