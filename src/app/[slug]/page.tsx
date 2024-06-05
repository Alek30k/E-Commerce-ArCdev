import { wixClientServer } from "@/lib/wixClientServer";
import Add from "../components/Add";
import CustomizeProducts from "../components/CustomizeProducts";
import ProductImages from "../components/ProductImages";

const SinglePage = async ({ params }: { params: { slug: string } }) => {
  console.log(params);

  const wixClient = await wixClientServer();

  const res = await wixClient.products
    .queryProducts()
    // .eq("collectionIds", categoryId)
    .find();

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMG */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      {/* TEXTS */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Product Name</h1>
        <p className="text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
          molestiae dolore rem. Modi adipisci vero, deleniti atque debitis
          aspernatur laudantium. Id quia autem aliquam similique soluta eaque
          facere quae obcaecati.
        </p>
        <div className="h-[2px] bg-gray-100" />
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">$59</h3>
          <h2 className="font-medium text-2xl">$49</h2>
        </div>
        <div className="h-[2px] bg-gray-100" />
        <CustomizeProducts />
        <Add />
        <div className="h-[2px] bg-gray-100" />
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            dolorum, a voluptatibus sequi commodi harum fugit velit ad mollitia
            dicta nostrum officiis culpa doloremque perspiciatis molestias unde
            placeat, aliquam possimus.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            dolorum, a voluptatibus sequi commodi harum fugit velit ad mollitia
            dicta nostrum officiis culpa doloremque perspiciatis molestias unde
            placeat, aliquam possimus.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            dolorum, a voluptatibus sequi commodi harum fugit velit ad mollitia
            dicta nostrum officiis culpa doloremque perspiciatis molestias unde
            placeat, aliquam possimus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
