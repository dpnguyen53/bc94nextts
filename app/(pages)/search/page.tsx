import { fetchDataByKeyword } from "@/app/services/product";
import type { TProduct } from "@/app/type";
import Product from "@/app/component/Product";

type TProps = {
  searchParams: {
    q: string;
  };
};

export default async function Search(props: TProps) {
  const searchParams = await props.searchParams;
  const { q } = searchParams;

  const data = await fetchDataByKeyword(q);

  const renderList = () => {
    return data?.map((product: TProduct) => (
      <Product key={product.id} product={product} />
    ));
  };

  return (
    <div>
      <h1>Search</h1>
      <div className="grid grid-cols-3 gap-10">{renderList()}</div>
    </div>
  );
}
