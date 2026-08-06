import type { TProduct } from "@/app/type";
import Product from "./component/Product";
import { fetchData } from "@/app/services/product";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shoes App",
  description:
    "Explore our wide range of shoes with the best prices and quality.",
  openGraph: {
    title: "Shoes App",
    description:
      "Explore our wide range of shoes with the best prices and quality.",
    url: "https://shoesshopbc70.vercel.app",
    images: [
      {
        url: "https://apistore.cybersoft.edu.vn/images/van-old-school.png",
        width: 800,
        height: 600,
        alt: "Shoes App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shoes App - About",
    description:
      "Explore our wide range of shoes with the best prices and quality.",
    images: ["https://apistore.cybersoft.edu.vn/images/van-old-school.png"],
  },
};

export default async function Home() {
  const data = await fetchData();

  const renderList = () => {
    return data?.map((product: TProduct) => (
      <Product key={product.id} product={product} />
    ));
  };

  return (
    <div>
      <h1>Home</h1>
      <div className="grid grid-cols-3 gap-10">{renderList()}</div>
    </div>
  );
}
