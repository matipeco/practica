import { Catalog } from "@/components/Catalog";
import { Provider } from "@/context";
import Link from "next/link";
import { useRouter } from "next/router";
import Favorites from "./favorites";

const App = () => {
  const router = useRouter();

  return (
    <>
      <Link href="/favorites">Favoritos</Link>
      {router.pathname === "/favorites" ? <Favorites /> : <Catalog />}
    </>
  );
};

export default App;
