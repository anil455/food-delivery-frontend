import { UtensilsCrossed } from "lucide-react";
import Link from "next/link";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function NotFound() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-white dark:bg-black">
      <Header />

      <main className="flex flex-1 items-center justify-center py-20">
        <Container className="flex flex-col items-center text-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-orange-50 dark:bg-orange-950">
            <UtensilsCrossed className="h-11 w-11 text-orange-600" />
          </div>

          <h1 className="mt-6 text-6xl font-bold tracking-tight text-orange-600">404</h1>
          <h2 className="mt-2 text-2xl font-bold text-neutral-900 dark:text-neutral-50">
            Page not found
          </h2>
          <Link
            href="/"
            className="mt-8 flex h-11 items-center gap-2 rounded-full bg-orange-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-orange-700"
          >
            Go to homepage
          </Link>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
