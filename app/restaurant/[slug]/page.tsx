import { Clock, MapPin, Star } from "lucide-react";
import CategoryFilterToggle from "@/components/CategoryFilterToggle";
import CategoryTabs from "@/components/CategoryTabs";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { getCategories, getRestaurant } from "@/lib/api";

export default async function RestorentPage({params,}: {params: Promise<{ slug: any }>;})  {
    const { slug } = await params;
    console.log("slug:", slug);

    const [restaurant, categoriesList] = await Promise.all([
        getRestaurant(slug),
        getCategories(slug),  
    ]);
    console.log("restaurant:", restaurant);
    console.log("categories:", categoriesList);


  return (
    <div className="flex min-h-full flex-1 flex-col bg-neutral-50 dark:bg-neutral-950">
      <Header />

      <div className="bg-gradient-to-r from-orange-600 to-orange-500 pb-10 pt-8 ">
        <Container>
          <h1 className="text-3xl font-bold text-white">{restaurant?.name}</h1>
          <p className="mt-1 text-sm text-orange-50">
            {restaurant?.description}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <span className="flex items-center gap-1 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
              <Star className="h-3.5 w-3.5 fill-white" />
              4.3 (2.1k ratings)
            </span>
            <span className="flex items-center gap-1 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
              <Clock className="h-3.5 w-3.5" />
              {restaurant?.avg_prep_time_minutes}
            </span>
            <span className="flex items-center gap-1 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
              <MapPin className="h-3.5 w-3.5" />
             {restaurant?.address?.city}, {restaurant?.address?.state}, {restaurant?.address?.line}
            </span>
          </div>
        </Container>
      </div>

      <div className="sticky top-0 z-10 border-b border-black/[.06] bg-white/90 backdrop-blur-sm dark:border-white/[.08] dark:bg-neutral-900/90">
        <Container className="py-3">
          <div className="flex items-center gap-2">
            <div className="min-w-0 flex-1">
              <CategoryTabs  categories={categoriesList} />
            </div>

            <div className="ml-1 shrink-0 border-l border-black/[.08] pl-3 dark:border-white/[.08]">
              <CategoryFilterToggle />
            </div>
          </div>
        </Container>
      </div>

      <Container className="py-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-neutral-900 dark:text-neutral-50">
            200 Products
          </h2>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <button className="rounded-full border border-black/[.08] bg-white px-4 py-1.5 text-sm font-medium text-neutral-600 transition-colors hover:border-orange-300 hover:text-orange-600 dark:border-white/[.08] dark:bg-neutral-900 dark:text-neutral-300">
            Price: Low to High
          </button>
          <button className="rounded-full border border-black/[.08] bg-white px-4 py-1.5 text-sm font-medium text-neutral-600 transition-colors hover:border-orange-300 hover:text-orange-600 dark:border-white/[.08] dark:bg-neutral-900 dark:text-neutral-300">
            Price: High to Low
          </button>
          <button className="flex items-center gap-1.5 rounded-full border border-green-600/30 bg-green-50 px-4 py-1.5 text-sm font-medium text-green-700 dark:bg-green-950 dark:text-green-400">
            <span className="h-2 w-2 rounded-full bg-green-600" />
            Veg
          </button>
          <button className="flex items-center gap-1.5 rounded-full border border-black/[.08] bg-white px-4 py-1.5 text-sm font-medium text-neutral-600 transition-colors hover:border-orange-300 hover:text-orange-600 dark:border-white/[.08] dark:bg-neutral-900 dark:text-neutral-300">
            <span className="h-2 w-2 rounded-full bg-red-600" />
            Non-Veg
          </button>
        </div>

        <div className="mt-6 flex items-center gap-2">
          <span className="h-5 w-1 rounded-full bg-orange-600" />
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
            Category 1
          </h3>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <ProductCard />
          <ProductCard
            name="Chicken Tikka"
            description="Smoky, char-grilled chicken marinated overnight in tandoori spices."
            isVeg={false}
          />
          <ProductCard />
          <ProductCard
            name="Mutton Seekh Kebab"
            description="Minced mutton skewers, chargrilled with ground spices."
            isVeg={false}
          />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      <Footer />
    </div>
  );
}
