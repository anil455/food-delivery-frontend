import { Phone } from "lucide-react";
import Image from "next/image";
import Container from "@/components/Container";

export default function PartnerSection() {
  return (
    <Container className="py-10" as="section">
      <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-black/[.06] bg-neutral-900 sm:grid-cols-2 dark:border-white/[.08]">
        <div className="relative h-56 sm:h-auto">
          <Image
            src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=1200&q=80&auto=format&fit=crop"
            alt="Restaurant kitchen"
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center p-8 sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-wide text-orange-500">
            For restaurant owners
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">Partner with us</h2>
          <p className="mt-3 max-w-sm text-sm text-neutral-300 sm:text-base">
            List your restaurant on Foodly and reach thousands of hungry customers near you.
            Our team sets up your account and menu for you.
          </p>
          <button className="mt-6 flex w-fit items-center gap-2 rounded-full bg-orange-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-700">
            <Phone className="h-4 w-4" />
            Talk to our partner team
          </button>
        </div>
      </div>
    </Container>
  );
}
