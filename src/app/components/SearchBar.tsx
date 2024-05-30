"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchBar = (e: React.FormEvent<HTMLFormElement>) => {
  const router = useRouter();

  const handlerSearch = () => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;

    if (name) {
      router.push(`/list?name=${name}`);
    }
  };

  return (
    <form
      className="flex items-center justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1"
      onSubmit={handlerSearch}
    >
      <input type="text" name="name" placeholder="Search" className="flex-1" />
      <button>
        <Image src="/search.png" alt="search" width={16} height={16} />
      </button>
    </form>
  );
};

export default SearchBar;