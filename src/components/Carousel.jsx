import { useState } from "react";

export default function Carousel({ images }) {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((index - 1 + images.length) % images.length);
  const next = () => setIndex((index + 1) % images.length);

  return (
    <div>
      {/* Main Image */}
      <div className="relative w-full h-60 md:h-72 overflow-hidden rounded-lg">
        <img
          src={`${import.meta.env.BASE_URL}${images[index]}`}
          alt=""
          className="w-full h-full object-cover"
        />
        {/* Arrows */}
        <button className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-xl" onClick={prev}>
          ❮
        </button>
        <button className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-xl" onClick={next}>
          ❯
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex mt-2 gap-2 overflow-x-auto">
        {images.map((img, i) => (
          <img
            key={i}
            src={`${import.meta.env.BASE_URL}${img}`}
            onClick={() => setIndex(i)}
            className={`w-16 h-16 object-cover rounded-md cursor-pointer border 
            ${i === index ? "border-blue-400" : "border-gray-600"}`}
          />
        ))}
      </div>
    </div>
  );
}
