import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";

const Rating = () => {
  const [reviews, setReviews] = useState([]);
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  // fetch reviews from public/review.json
  useEffect(() => {
    fetch("/review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error("Failed to load reviews:", err));
  }, []);

  const next = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
      setFade(true);
    }, 200);
  };

  const prev = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
      setFade(true);
    }, 200);
  };

  // auto slide every 5 seconds
  useEffect(() => {
    if (reviews.length === 0) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [reviews]);

  if (reviews.length === 0)
    return <p className="text-center my-10">Loading...</p>;

  return (
    <div className="my-24 ">
      <SectionTitle subHeading="What Our Client Say" Heading="TESTIMONIALS" />

      <div className="max-w-xl mx-auto mt-14 relative px-4">
        {/* Card */}
        <div
          className={`bg-white rounded-2xl p-8 text-center shadow-2xl transition-all duration-500 ${
            fade ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {/* text */}
          <p className="text-gray-700 italic mb-6">
            “{reviews[current].details}”
          </p>

          {/* stars */}
          <div className="flex justify-center mb-3">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`text-xl ${
                  i < reviews[current].rating
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
              >
                ★
              </span>
            ))}
          </div>

          {/* name */}
          <h4 className="font-semibold text-lg">{reviews[current].name}</h4>
        </div>

        {/* Buttons */}
        <button
          onClick={prev}
          className="absolute left-[-50px] top-1/2 -translate-y-1/2 bg-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-xl hover:bg-gray-100 transition"
        >
          ‹
        </button>

        <button
          onClick={next}
          className="absolute right-[-50px] top-1/2 -translate-y-1/2 bg-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-xl hover:bg-gray-100 transition"
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default Rating;
