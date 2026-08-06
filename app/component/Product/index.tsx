import type { TProduct } from "@/app/type";
import Image from "next/image";
import Link from "next/link";

type TProps = {
  product: TProduct;
};

export default function Product(props: TProps) {
  const { product } = props;

  return (
    <div className="bg-neutral-primary-soft block max-w-sm border border-default rounded-base shadow-xs">
      <a href="#">
        <Image
          className="rounded-t-base"
          src={product.image}
          alt={product.name}
          width={500}
          height={500}
          loading="eager"
        />
      </a>
      <div className="p-6 text-center">
        <a href="#">
          <h5 className="mt-3 mb-6 text-2xl font-semibold tracking-tight text-heading">
            {product.name}
          </h5>
        </a>
        <Link className="" href={`/detail/${product.id}`}>
          Detail
        </Link>
      </div>
    </div>
  );
}
