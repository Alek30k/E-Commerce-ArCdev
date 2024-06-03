"use client";

import { useState } from "react";

const Add = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Choose a Quantity</h4>
      <div className="">
        <div className="">
          <button>-</button>
          {quantity}
          <button>+</button>
        </div>
        <div className="text-xs">
          Only <span className="text-orange-400">4 ítems</span> left! <br />{" "}
          {"Don't"} mis it
        </div>
      </div>
      <button className="w-36 text-sm rounded-3xl ring-1 ring-ale text-ale py-2 px-4 hover:bg-ale hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-white disabled:ring-none">
        Add to Cart
      </button>
    </div>
  );
};

export default Add;
