export type TProduct = {
  sizes: number[];
  id: number;
  name: string;
  alias: string;
  price: number;
  description: string;
  size: string;
  shortDescription: string;
  quantity: number;
  deleted: boolean;
  categories: string;
  relatedProducts: string;
  feature: boolean;
  image: string;
  imgLink: string;
};

export type TInitialState<T> = {
  loading: boolean;
  data: null | T;
  error: null | any;
};
