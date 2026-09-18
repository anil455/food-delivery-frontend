"use client";

import { SlidersHorizontal, X } from "lucide-react";
import { useState } from "react";

const CATEGORIES = ["Category 1", "Category 2", "Category 3", "Category 4"];

export default function CategoryFilterToggle() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-1.5 rounded-full border border-black/[.08] bg-white px-4 py-1.5 text-sm font-medium text-neutral-600 dark:border-white/[.08] dark:bg-neutral-900 dark:text-neutral-300"
      >
        <SlidersHorizontal className="h-3.5 w-3.5" />
        Filter
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 sm:items-center">
          <div
            className="absolute inset-0"
            onClick={() => setIsOpen(false)}
          />

          <div className="relative w-full max-w-sm rounded-t-2xl bg-white p-5 dark:bg-neutral-900 sm:rounded-2xl">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-50">
                All Categories
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="flex h-7 w-7 items-center justify-center rounded-full text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-4 flex flex-col gap-1">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  className="rounded-lg px-3 py-2.5 text-left text-sm font-medium text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
