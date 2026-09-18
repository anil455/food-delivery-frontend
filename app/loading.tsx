import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PreviousOrders from "@/components/PreviousOrders";

export default function Loading() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-white dark:bg-black">
      <Header />

      <Container className="pt-6 pb-8">
        <div className="h-48 w-full animate-pulse rounded-2xl bg-neutral-200 dark:bg-neutral-800 sm:h-64" />
      </Container>

      <main className="flex-1">
        <Hero />
        <PreviousOrders />

        <section className="bg-neutral-50 dark:bg-neutral-950/60">
          <Container className="py-12">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="h-3 w-20 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
                <div className="mt-2 h-6 w-48 animate-pulse rounded-lg bg-neutral-200 dark:bg-neutral-800" />
              </div>

              <div className="h-9 w-full animate-pulse rounded-full bg-neutral-200 dark:bg-neutral-800 sm:w-64" />
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <div className="h-8 w-20 animate-pulse rounded-full bg-neutral-200 dark:bg-neutral-800" />
              <div className="h-8 w-32 animate-pulse rounded-full bg-neutral-200 dark:bg-neutral-800" />
            </div>

            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-2xl border border-black/[.06] bg-white dark:border-white/[.08] dark:bg-neutral-900"
                >
                  <div className="h-40 animate-pulse bg-neutral-200 dark:bg-neutral-800" />
                  <div className="p-4">
                    <div className="h-4 w-2/3 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
                    <div className="mt-2 h-3 w-full animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
                    <div className="mt-3 flex items-center justify-between">
                      <div className="h-3 w-16 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
                      <div className="h-3 w-16 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
                    </div>
                    <div className="mt-2 h-3 w-3/4 animate-pulse rounded border-t border-dashed border-black/[.06] pt-2 dark:border-white/[.08]" />
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
