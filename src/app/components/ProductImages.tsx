"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/25047788/pexels-photo-25047788/free-photo-of-madera-paisaje-agua-verano.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/23947602/pexels-photo-23947602/free-photo-of-amor-gente-mujer-picnic.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/22707220/pexels-photo-22707220/free-photo-of-moda-hombre-amor-gente.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/21821538/pexels-photo-21821538/free-photo-of-ligero-mar-paisaje-montanas.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
  },
];

const ProductImages = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={images[index].url}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between gap-4 mt-8">
        {images.map((img, i) => (
          <div
            className="w-1/4 h-32 relative gap-4 mt-8"
            key={img.id}
            onClick={() => setIndex(i)}
          >
            <Image
              src={img.url}
              alt=""
              fill
              sizes="30vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
