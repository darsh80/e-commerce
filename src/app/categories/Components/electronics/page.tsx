import ElectronicsFilter from "./ElectronicsFilter";
import ElectronicsHero from "./ElectronicsHero";
import ElectronicsProducts from "./ElectronicsProducts";

export default function Electronics() {
  return (
    <div className="min-h-screen bg-gray-50/50">
      <ElectronicsHero />
      <ElectronicsFilter />
      <ElectronicsProducts />
    </div>
  );
}


