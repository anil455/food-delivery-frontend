import Container from "@/components/Container";
import Header from "@/components/Header";

export default function Loading() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-neutral-50 dark:bg-neutral-950">
      <Header />

      <div className="bg-gradient-to-r from-orange-600 to-orange-500 pb-10 pt-8">
        <Container>
          <div className="h-9 w-48 animate-pulse rounded-lg bg-white/25" />
          <div className="mt-2 h-4 w-64 animate-pulse rounded-lg bg-white/20" />

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <div className="h-7 w-32 animate-pulse rounded-full bg-white/20" />
            <div className="h-7 w-28 animate-pulse rounded-full bg-white/20" />
            <div className="h-7 w-36 animate-pulse rounded-full bg-white/20" />
          </div>
        </Container>
      </div>

      <div className="border-b border-black/[.06] bg-white/90 dark:border-white/[.08] dark:bg-neutral-900/90">
        <Container className="py-3">
          <div className="flex items-center gap-2">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="h-8 w-24 shrink-0 animate-pulse rounded-full bg-neutral-200 dark:bg-neutral-800"
              />
            ))}
          </div>
        </Container>
      </div>

      <Container className="py-6">
        <div className="h-6 w-32 animate-pulse rounded-lg bg-neutral-200 dark:bg-neutral-800" />

        <div className="mt-4 flex flex-wrap gap-2">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="h-8 w-28 animate-pulse rounded-full bg-neutral-200 dark:bg-neutral-800"
            />
          ))}
        </div>

        <div className="mt-6 h-5 w-28 animate-pulse rounded-lg bg-neutral-200 dark:bg-neutral-800" />

        <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl border border-black/[.06] bg-white dark:border-white/[.08] dark:bg-neutral-900"
            >
              <div className="h-40 animate-pulse bg-neutral-200 dark:bg-neutral-800" />
              <div className="p-4">
                <div className="h-4 w-2/3 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
                <div className="mt-2 h-3 w-full animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
                <div className="mt-1 h-3 w-4/5 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
                <div className="mt-3 flex items-center justify-between border-t border-dashed border-black/[.06] pt-3 dark:border-white/[.08]">
                  <div className="h-5 w-16 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
                  <div className="h-7 w-20 animate-pulse rounded-full bg-neutral-200 dark:bg-neutral-800" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
