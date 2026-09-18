import { MapPin, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import Container from "@/components/Container";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-black/[.06] bg-white/90 backdrop-blur dark:border-white/[.08] dark:bg-black/90">
      <Container className="flex items-center gap-4 py-3">
        <Link href="/" className="shrink-0 text-xl font-bold tracking-tight text-orange-600">
          Food<span className="text-neutral-900 dark:text-neutral-50">ly</span>
        </Link>

        <div className="flex shrink-0 items-center gap-1.5 rounded-full border border-black/[.08] px-2.5 py-1.5 text-xs font-medium text-neutral-700 sm:px-3 sm:text-sm dark:border-white/[.145] dark:text-neutral-200">
          <MapPin className="h-4 w-4 shrink-0 text-orange-600" />
          <span className="max-w-[90px] truncate sm:max-w-none">Connaught Place</span>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <button className="relative flex h-10 w-10 items-center justify-center rounded-full text-neutral-700 transition-colors hover:bg-black/[.04] dark:text-neutral-200 dark:hover:bg-white/[.06]">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute right-1.5 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-orange-600 text-[10px] font-semibold text-white">
              2
            </span>
          </button>
          <button className="flex h-10 items-center gap-1.5 rounded-full bg-orange-600 px-3 text-sm font-medium text-white transition-colors hover:bg-orange-700 sm:px-4">
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">Login</span>
          </button>
        </div>
      </Container>
    </header>
  );
}
