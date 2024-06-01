import Image from "next/image";
import Link from "next/link";

const CategoryList = () => {
  return (
    <div className="px-4 overflow-scroll">
      <div className="flex gap-4 md:gap-8">
        <Link href="/list?cat=test">
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/3819969/pexels-photo-3819969.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
            <h1 className="mt-8 font-light text-cl tracking-wide">
              Category Name
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
