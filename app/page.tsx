import { cookies } from "next/headers";
import VersionA from "./components/ProductCard/VersionA";
import VersionB from "./components/ProductCard/VersionB";
import ProductList from "./components/ProductList";

export default async function HomePage() {
  const cookieStore = cookies();
  const version = cookieStore.get("version")?.value;
  console.log("HOME", cookieStore.get("version"));

  return <ProductList version={version} />;
}
