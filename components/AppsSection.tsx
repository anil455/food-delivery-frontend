import { Apple, Smartphone } from "lucide-react";
import Image from "next/image";
import Container from "@/components/Container";

export default function AppsSection() {
  return (
    <Container className="py-10" as="section">
      <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-black/[.06] bg-orange-50 sm:grid-cols-2 dark:border-white/[.08] dark:bg-neutral-900">
        <div className="flex flex-col justify-center p-8 sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-wide text-orange-600">
            Order on the go
          </p>
          <h2 className="mt-2 text-2xl font-bold text-neutral-900 sm:text-3xl dark:text-neutral-50">
            Apps for you
          </h2>
          <p className="mt-3 max-w-sm text-sm text-neutral-600 sm:text-base dark:text-neutral-400">
            Get the Foodly app for faster ordering, live order tracking and app-only offers.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <button className="flex items-center gap-2 rounded-xl bg-neutral-900 px-4 py-2.5 text-white transition-colors hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200">
              <Apple className="h-6 w-6" />
              <span className="text-left leading-tight">
                <span className="block text-[10px] text-neutral-300 dark:text-neutral-600">
                  Download on the
                </span>
                <span className="block text-sm font-semibold">App Store</span>
              </span>
            </button>

            <button className="flex items-center gap-2 rounded-xl bg-neutral-900 px-4 py-2.5 text-white transition-colors hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200">
              <Smartphone className="h-6 w-6" />
              <span className="text-left leading-tight">
                <span className="block text-[10px] text-neutral-300 dark:text-neutral-600">
                  Get it on
                </span>
                <span className="block text-sm font-semibold">Google Play</span>
              </span>
            </button>
          </div>
        </div>

        <div className="relative h-56 sm:h-auto">
          <Image
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80&auto=format&fit=crop"
            alt="Ordering food on a phone"
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </Container>
  );
}
