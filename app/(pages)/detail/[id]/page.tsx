import { fetchDataById } from "@/app/services/product";
import Image from "next/image";

type TProps = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: any) {
  const { id } = await params;
  const prodDetail = await fetchDataById(id);

  return {
    title: `${prodDetail.name} - Product Detail`,
    description: prodDetail.description,
    openGraph: {
      title: prodDetail.name,
      description: prodDetail.description,
      url: `https://yourwebsite.com/products/${id}`,
      images: [
        {
          url: prodDetail.image,
          width: 500,
          height: 500,
          alt: prodDetail.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: prodDetail.name,
      description: prodDetail.description,
      images: [prodDetail.image],
    },
  };
}

export default async function Detail(props: TProps) {
  const params = await props.params;
  const { id } = params;

  const data = await fetchDataById(id);

  return (
    <div>
      <h1>Detail</h1>
      <Image
        className="rounded-t-base"
        src={data.image}
        alt={data.name}
        width={500}
        height={500}
        loading="eager"
      />
      <h1>Name: {data.name}</h1>
      <p>Description: {data.description}</p>
    </div>
  );
}
