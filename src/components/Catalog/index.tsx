import { Context } from "@/context";
import { useContext, useEffect, useState } from "react";
import { Product, ProductCard } from "../ProductCard";
import { StyledCatalog } from "./style";

export const Catalog = () => {
  const [products, setProducts] = useState<Product[]>();

  const { favorites, setFavorites } = useContext(Context)!;

  const getProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const products = data.map((prod: any) => ({ ...prod, quantity: 1 }));
        setProducts(products);
      })
      .catch((error) => {
        return error;
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  console.log(favorites);
  return (
    <>
      <StyledCatalog>
        <h1>Catalogo</h1>
        {products?.map((prod) => {
          return <ProductCard key={prod.id} prod={prod} />;
        })}
      </StyledCatalog>
    </>
  );
};
