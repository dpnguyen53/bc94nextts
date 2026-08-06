"use client";

import { useState, useEffect } from "react";
import type { TInitialState, TProduct } from "@/app/type";
import Product from "@/app/component/Product";

export default function About() {
  const [state, setState] = useState<TInitialState<TProduct[]>>({
    loading: false,
    data: null,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // pending
        setState({
          loading: true,
          data: null,
          error: null,
        });

        const response = await fetch(
          "https://apistore.cybersoft.edu.vn/api/Product",
        );

        const result = await response.json();

        setState({
          loading: false,
          data: result.content,
          error: null,
        });
      } catch (error) {
        setState({
          loading: false,
          data: null,
          error: error,
        });
      }
    };

    fetchData();
  }, []);

  const renderList = () => {
    const { data } = state;
    return data?.map((product: TProduct) => (
      <Product key={product.id} product={product} />
    ));
  };

  return (
    <div>
      <h1>About</h1>
      <div className="grid grid-cols-3 gap-10">{renderList()}</div>
    </div>
  );
}
