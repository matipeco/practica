import {
  createContext,
  Dispatch,
  SetStateAction,
  PropsWithChildren,
  FunctionComponent,
  useState,
} from "react";
import { Product } from "../components/ProductCard";

type ContextState = {
  favorites: Product[];
  setFavorites: Dispatch<SetStateAction<Product[]>>;
};

export const Context = createContext<ContextState | null>(null);

export const Provider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<Product[]>([]);

  return (
    <Context.Provider value={{ favorites, setFavorites }}>
      {children}
    </Context.Provider>
  );
};
