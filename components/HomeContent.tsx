import Container from "@/components/Container";
import RestaurantList from "@/components/RestaurantList";
import { getRestaurants } from "@/lib/api";

export default async function HomeContent() {
  const restaurants = await getRestaurants();
  console.log("restaurants data", restaurants);

  return (
    <section className="bg-neutral-50 dark:bg-neutral-950/60">
      <Container className="py-12">
        <RestaurantList restaurantsData={restaurants} />
      </Container>
    </section>
  );
}
