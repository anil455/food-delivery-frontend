import { Clock, MapPin, Star } from "lucide-react";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getCategories, getRestaurant, getProducts } from "@/lib/api";
import RestaurantMenu from "@/components/RestaurantMenu";
import { notFound } from "next/navigation";

export async function generateMetadata({ params,}: {
  params: Promise<{ slug: any; category?: any[] }>;
}) {
  const { slug, category } = await params;
  const restaurant = await getRestaurant(slug);
  const categorySlug = category?.[0];
  const categories = await getCategories(slug);
  const matchedCategory = categories.find((c: any) => c.slug === categorySlug); 

  return {
    title: categorySlug
  ? `${matchedCategory?.name ?? categorySlug} Menu at ${restaurant?.name} | Foodly`
  : `${restaurant?.name} — Order Online | Foodly`,
    description: categorySlug
      ? `Order ${categorySlug} from ${restaurant?.name}. ${restaurant?.description ?? ""}`
      : restaurant?.description,
  };
}


export default async function RestorentPage({params,}: {params: Promise<{ slug: any; category?: any[] }>;})  {
    const { slug, category } = await params;
    const initialCategory = category?.[0];
    console.log("slug:", slug);

    const [restaurant, categoriesList, productsList] = await Promise.all([
        getRestaurant(slug),
        getCategories(slug),  
        getProducts(slug),
    ]);
    console.log("restaurant:", restaurant);
    console.log("categories:", categoriesList);
    console.log("products:", productsList);

    if (initialCategory) {
      const validCategory = categoriesList.find((c: any) => c.slug === initialCategory);
      if (!validCategory) {
        notFound();
      }
    }


  return (
    <div className="flex min-h-full flex-1 flex-col bg-neutral-50 dark:bg-neutral-950">
      <Header />

      <div className="bg-gradient-to-r from-orange-600 to-orange-500 pb-10 pt-8 ">
        <Container>
          <h1 className="text-3xl font-bold text-white">{restaurant?.name} <span className="text-lg"> {productsList.length} Products</span> </h1>
          <p className="mt-1 text-sm text-orange-50">
            {restaurant?.description}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            {/* <span className="flex items-center gap-1 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
              <Star className="h-3.5 w-3.5 fill-white" />
              4.3 (2.1k ratings)
            </span> */}
            {restaurant?.avg_prep_time_minutes && (
                <span className="flex items-center gap-1 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  <Clock className="h-3.5 w-3.5" />
                  Ready in {restaurant?.avg_prep_time_minutes} minutes
                </span>
              )}
            <span className="flex items-center gap-1 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
              <MapPin className="h-3.5 w-3.5" />
             {restaurant?.address?.city}, {restaurant?.address?.state}, {restaurant?.address?.line}
            </span>
          </div>
        </Container>
      </div>

      <RestaurantMenu categories={categoriesList} products={productsList} initialCategory={initialCategory} />


      <Footer />
    </div>
  );
}
