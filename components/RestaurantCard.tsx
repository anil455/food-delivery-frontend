import { Clock, ImageIcon, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Fully static — no object, no prop. Bind this yourself later.
export default function RestaurantCard({ restaurant }: { restaurant: any }) {
  return (
    <Link href={`/restaurant/${restaurant.slug}`}>
    <div className="group overflow-hidden rounded-2xl border border-black/[.06] bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg dark:border-white/[.08] dark:bg-neutral-900">
      <div className="relative h-40 overflow-hidden">
        {restaurant.cover_path ? (
        <Image
          src={restaurant.cover_path || "/placeholder.png"}
          alt={restaurant.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
         ) : (
           <div className="flex h-full items-center justify-center">
            <ImageIcon className="h-10 w-10 text-neutral-300 dark:text-neutral-600" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

        <span className={`absolute left-3 top-3 rounded-full px-2 py-1 text-[11px] font-semibold text-white shadow-sm ${
            restaurant.is_open ? "bg-green-600" : "bg-red-500"
          }`}>
         {restaurant.is_open ? "Open now" : "Closed"}
        </span>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">{restaurant.name}</h3>

        <p className="mt-1 truncate text-sm text-neutral-500 dark:text-neutral-400">
         {restaurant.description}
        </p>

        <div className="mt-3 flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {restaurant.avg_prep_time_minutes} mins
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" />
           {restaurant.address.city}
          </span>
        </div>

        <p className="mt-2 border-t border-dashed border-black/[.06] pt-2 text-xs text-neutral-400 dark:border-white/[.08]">
          Min order ₹{Math.round(restaurant.min_order_amount.amount)} · Delivery ₹{Math.round(restaurant.delivery_fee_base.amount)}
        </p>
      </div>
    </div>
    </Link>
  );
}
