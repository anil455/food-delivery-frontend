
"use client";


import { Search, SearchX } from "lucide-react";
import { useState } from "react";
import RestaurantCard from "@/components/RestaurantCard";

export default function RestaurantList({ restaurantsData }: { restaurantsData: any[] }) {

const [sortBy, setSortBy] = useState("default");
const [search, setSearch] = useState("");

const sorted = [...restaurantsData].sort((a, b) => {
  if (sortBy === "name") {
    return a.name.localeCompare(b.name);
  }
  if (sortBy === "fast") {
    return a.avg_prep_time_minutes - b.avg_prep_time_minutes;
  }
  return 0;
});

const filtered = sorted.filter((restaurant) =>
  restaurant.name.toLowerCase().includes(search.toLowerCase())
);


  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-orange-600">
            Discover
          </p>
          <h2 className="mt-1 text-2xl font-bold text-neutral-900 dark:text-neutral-50">
            Restaurants near you
          </h2>
        </div>

        <div className="relative sm:w-64">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search restaurants"
            className="w-full rounded-full border border-black/[.08] bg-white py-2 pl-9 pr-4 text-sm text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-orange-400 dark:border-white/[.145] dark:bg-neutral-900 dark:text-neutral-100"
          />
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <button onClick={() => setSortBy(sortBy === "name" ? "default" : "name")} className="rounded-full border border-black/[.08] bg-white px-4 py-1.5 text-sm font-medium text-neutral-600 dark:border-white/[.08] dark:bg-neutral-900 dark:text-neutral-300">
          Name
        </button>

        <button onClick={() => setSortBy(sortBy === "fast" ? "default" : "fast")} className="rounded-full border border-black/[.08] bg-white px-4 py-1.5 text-sm font-medium text-neutral-600 dark:border-white/[.08] dark:bg-neutral-900 dark:text-neutral-300">
          Fast Delivery
        </button>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.length === 0 ? (
            <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
              <SearchX className="h-10 w-10 text-neutral-300" />
              <p className="mt-3 text-sm font-medium text-neutral-900 dark:text-neutral-100">
                No restaurants found
              </p>
              <p className="mt-1 text-sm text-neutral-500">
                We couldn't find anything matching "{search}"
              </p>
            </div>
          ) : (
            filtered.map((restaurant: any) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))
          )}
      </div>
    </div>
  );
}
