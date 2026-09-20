"use client";
import { useState, useEffect } from "react";
import CategoryTabs from "./CategoryTabs";
import ProductCard from "./ProductCard";
import Container from "@/components/Container";
import CategoryFilterToggle from "./CategoryFilterToggle";

export default function RestaurantMenu({ categories, products, initialCategory }: { categories: any[]; products: any[]; initialCategory?: any }) {
  const [selectedCategoryId, setSelectedCategoryId]  = useState<any>(categories[0]?.id);

  const handleSelectCategory = (categoryId: any) => {
  setSelectedCategoryId(categoryId);
  document.getElementById(`category-${categoryId}`)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

useEffect(() => {
  const handleScroll = () => {
    let currentCategoryId = categories[0]?.id;

    for (const category of categories) {
      const section = document.getElementById(`category-${category.id}`);
      if (section && section.getBoundingClientRect().top <= 190) {
        currentCategoryId = category.id;
      }
    }

    setSelectedCategoryId(currentCategoryId);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [categories]);

useEffect(() => {
  if (!initialCategory) return;
  const match = categories.find((c: any) => c.slug === initialCategory);
  if (match) {
    setSelectedCategoryId(match.id);
    document.getElementById(`category-${match.id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}, []);

const [priceSort, setPriceSort] = useState<"none" | "low" | "high">("none");
const [vegFilter, setVegFilter] = useState<"all" | "veg" | "nonveg">("all");

  return (
    <div>
        <div className="sticky top-15 z-10 border-b border-black/[.06] bg-white/90 backdrop-blur-sm dark:border-white/[.08] dark:bg-neutral-900/90">
            <Container className="py-3">
            <div className="flex items-center gap-2">
                <div className="min-w-0 flex-1">
                <CategoryTabs  
                categories={categories}
                 selectedCategoryId={selectedCategoryId}
                onSelectCategory={handleSelectCategory} 
                />
                </div>

                <div className="ml-1 shrink-0 border-l border-black/[.08] pl-3 dark:border-white/[.08]">
                <CategoryFilterToggle
                categories={categories}
                 selectedCategoryId={selectedCategoryId}
                onSelectCategory={handleSelectCategory}
                priceSort={priceSort}
                setPriceSort={setPriceSort}
                vegFilter={vegFilter}
                setVegFilter={setVegFilter} />
                </div>
            </div>
            </Container>
        </div>

        <Container className="py-6">

       <div className="mt-4 flex flex-wrap gap-2 mb-7">
            <button
                onClick={() => setPriceSort(priceSort === "low" ? "none" : "low")}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                priceSort === "low"
                    ? "border-orange-600 bg-orange-50 text-orange-700"
                    : "border-black/[.08] bg-white text-neutral-600 hover:border-orange-300 hover:text-orange-600"
                }`}
            >
                Price: Low to High
            </button>

            <button
                onClick={() => setPriceSort(priceSort === "high" ? "none" : "high")}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                priceSort === "high"
                    ? "border-orange-600 bg-orange-50 text-orange-700"
                    : "border-black/[.08] bg-white text-neutral-600 hover:border-orange-300 hover:text-orange-600"
                }`}
            >
                Price: High to Low
            </button>

            <button
                onClick={() => setVegFilter(vegFilter === "veg" ? "all" : "veg")}
                className={`flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm font-medium ${
                vegFilter === "veg"
                    ? "border-green-600/30 bg-green-50 text-green-700"
                    : "border-black/[.08] bg-white text-neutral-600 hover:border-orange-300 hover:text-orange-600"
                }`}
            >
                <span className="h-2 w-2 rounded-full bg-green-600" />
                Veg
            </button>

            <button
                onClick={() => setVegFilter(vegFilter === "nonveg" ? "all" : "nonveg")}
                className={`flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm font-medium ${
                vegFilter === "nonveg"
                    ? "border-red-600/30 bg-red-50 text-red-700"
                    : "border-black/[.08] bg-white text-neutral-600 hover:border-orange-300 hover:text-orange-600"
                }`}
            >
                <span className="h-2 w-2 rounded-full bg-red-600" />
                Non-Veg
            </button>
            </div>

     
            {categories.map((category: any) => {
                let categoryProducts = products.filter(
                (product: any) => product.category_id === category.id
                );

                if (vegFilter === "veg") categoryProducts = categoryProducts.filter((p: any) => p.is_veg);
                if (vegFilter === "nonveg") categoryProducts = categoryProducts.filter((p: any) => !p.is_veg);

                if (priceSort === "low") categoryProducts = [...categoryProducts].sort((a: any, b: any) => a.base_price.minor - b.base_price.minor);
                if (priceSort === "high") categoryProducts = [...categoryProducts].sort((a: any, b: any) => b.base_price.minor - a.base_price.minor);

                if (categoryProducts.length === 0) return null;

                return (
                <div key={category.id} id={`category-${category.id}`} className="mb-8 scroll-mt-40">
                    <div className="flex items-center gap-2">
                    <span className="h-5 w-1 rounded-full bg-orange-600" />
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                        {category.name}
                    </h3>
                    </div>

                    <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {categoryProducts.map((product: any) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                    </div>
                </div>
                );
            })}
      

       
        </Container>
    </div>
  );
}