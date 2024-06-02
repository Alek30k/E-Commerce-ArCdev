import Image from "next/image";

const ListPage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative">
      {/* CAMPAIGN */}
      <div className="">
        <div className="w-2/3">
          <h1 className="">Grab up to 50% off on Selected Products</h1>
          <button>Buy Now</button>
        </div>
        <div className="relative w-1/3">
          <Image src="/woman.png" alt="" fill className="object-contain" />
        </div>
      </div>
    </div>
  );
};

export default ListPage;
