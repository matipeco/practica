// import { ProductCard } from "@/components/ProductCard";
import { ProductCard } from "@/components/ProductCard";
import { Context } from "@/context";
import { useContext } from "react";

const Favorites = () => {
  const { favorites, setFavorites } = useContext(Context)!;

  return favorites.length === 0 ? (
    <p>NO SE AGREGARON FAVORITOS</p>
  ) : (
    <div>
      {favorites.map((prod) => {
        return <ProductCard key={prod.id} prod={prod} />;
      })}
    </div>
  );
};

export default Favorites;
