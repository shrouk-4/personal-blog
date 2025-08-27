import React from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react"; // أيقونات للأسهم

const categories = [
  { name: "Nature", img: "/images/all.jpg" },
  { name: "Tech", img: "/images/tech.jpg" },
  { name: "Travel", img: "/images/travel.jpg" },
  { name: "Food", img: "/images/food.jpg" },
  { name: "Lifestyle", img: "/images/lifestyle.jpg" },
  { name: "Fashion", img:"/public/images/fashion.jpg"},
];

// سهم يمين
function NextArrow(props) {
  const { onClick } = props;
  return (
    <button
      className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black text-white p-2 rounded-full z-10"
      onClick={onClick}
    >
      <ChevronRight size={24} />
    </button>
  );
}

// سهم شمال
function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black text-white p-2 rounded-full z-10"
      onClick={onClick}
    >
      <ChevronLeft size={24} />
    </button>
  );
}

function CategoriesSlider({ onSelectCategory }) {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    Dots:true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <div className="slider-container relative py-18">
      <Slider {...settings}>
        {categories.map((cat, index) => (
          <div key={index} className="px-2">
            <button
              onClick={() => onSelectCategory(cat.name)}
              className="relative h-60 w-full rounded-xl overflow-hidden shadow-lg group"
            >
              {/* الصورة */}
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />

              {/* طبقة سوداء شفافة + النص */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-white text-xl font-bold">
                  {cat.name}
                </span>
              </div>
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CategoriesSlider;
