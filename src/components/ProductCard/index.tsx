import { FunctionComponent, useContext } from "react";
import Image from "next/image";
import { Context } from "@/context";
import { useRouter } from "next/router";
import { StyledProductCard } from "./style";

export type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  quantity: number;
};

type Props = {
  prod: Product;
};

export const ProductCard: FunctionComponent<Props> = ({ prod }) => {
  const { favorites, setFavorites } = useContext(Context)!;

  const router = useRouter();

  const handleFavorites = (id: number) => {
    //busco su ubicacion en el array
    const index = favorites.findIndex((prod) => prod.id === id);

    if (index !== -1) {
      //Me hago copia de favorites
      const productUpdate = [...favorites];

      //agarro el objeto que quiero por el del index
      productUpdate[index].quantity += 1;

      //reemplazo favorites por mi array actualizado
      setFavorites(productUpdate);
    } else {
      setFavorites([...favorites, prod]);
    }
  };

  const handleDelete = (id: number) => {
    const favoritesFilter = favorites.filter((prod) => prod.id !== id);

    setFavorites(favoritesFilter);
  };

  const handleOperacion = (id: number, flag: boolean) => {
    const index = favorites.findIndex((prod) => prod.id === id);
    const productsUpdate = [...favorites];

    if (flag) {
      productsUpdate[index].quantity += 1;
    } else {
      if (productsUpdate[index].quantity > 1)
        productsUpdate[index].quantity -= 1;
    }

    setFavorites(productsUpdate);
  };

  console.log(favorites);
  return (
    <StyledProductCard>
      <Image src={prod.image} alt={prod.title} width="60" height="60" />
      <p>Producto: {prod.title}</p>
      <p>Precio: {prod.price}</p>

      {router.pathname === "/favorites" ? (
        <>
          <button
            onClick={() => handleOperacion(prod.id, false)}
            disabled={prod.quantity === 1 ? true : false}
          >
            -
          </button>
          <button onClick={() => handleOperacion(prod.id, true)}>+</button>
          <p>Cantidad: {prod.quantity}</p>
          <button onClick={() => handleDelete(prod.id)}>
            Eliminar de favoritos
          </button>
        </>
      ) : (
        <button onClick={() => handleFavorites(prod.id)}>
          Agregar a favoritos
        </button>
      )}
    </StyledProductCard>
  );
};
