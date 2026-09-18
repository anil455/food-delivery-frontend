import Container from "@/components/Container";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-orange-50 to-white dark:from-neutral-900 dark:to-black">
      <Container className="py-14 text-center sm:py-20">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-5xl dark:text-neutral-50">
          Food, delivered fast.
        </h1>
        <p className="mx-auto mt-3 max-w-md text-base text-neutral-600 sm:text-lg dark:text-neutral-400">
          Order from your favourite restaurants near you.
        </p>
      </Container>
    </section>
  );
}
