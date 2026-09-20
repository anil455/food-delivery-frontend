"use client";

import { SlidersHorizontal, X } from "lucide-react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";



export default function CategoryFilterToggle({ 
  categories,
   selectedCategoryId,
    onSelectCategory,
   priceSort,
  setPriceSort,
  vegFilter,
  setVegFilter, }: {
   categories: any[];
    selectedCategoryId:any;
     onSelectCategory: (id: any) => void;
    priceSort: "none" | "low" | "high";
  setPriceSort: (v: "none" | "low" | "high") => void;
  vegFilter: "all" | "veg" | "nonveg";
  setVegFilter: (v: "all" | "veg" | "nonveg") => void; }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
  };
}, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-1.5 rounded-full border border-black/[.08] bg-white px-4 py-1.5 text-sm font-medium text-neutral-600 dark:border-white/[.08] dark:bg-neutral-900 dark:text-neutral-300"
      >
        <SlidersHorizontal className="h-3.5 w-3.5" />
        Filter
      </button>

      {isOpen && createPortal(
        <div className="fixed inset-0 z-50 bg-black/60">
          <div
            className="absolute inset-0"
            onClick={() => setIsOpen(false)}
          />

          <div className="relative h-full w-[80%] max-w-xs overflow-y-auto bg-white p-5 shadow-xl dark:bg-neutral-900 sm:w-[30%] sm:max-w-none">
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

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <button
                onClick={() =>{
                 setPriceSort(priceSort === "low" ? "none" : "low");
                 setIsOpen(false);
                }}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                  priceSort === "low"
                    ? "border-orange-600 bg-orange-50 text-orange-700"
                    : "border-black/[.08] bg-white text-neutral-600 hover:border-orange-300 hover:text-orange-600"
                }`}
              >
                Price: Low to High
              </button>

              <button
                onClick={() =>{
                   setPriceSort(priceSort === "high" ? "none" : "high");
                   setIsOpen(false);
                  }}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                  priceSort === "high"
                    ? "border-orange-600 bg-orange-50 text-orange-700"
                    : "border-black/[.08] bg-white text-neutral-600 hover:border-orange-300 hover:text-orange-600"
                }`}
              >
                Price: High to Low
              </button>

              <button
                onClick={() =>{
                 setVegFilter(vegFilter === "veg" ? "all" : "veg");
                 setIsOpen(false);
                }}
                className={`flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm font-medium ${
                  vegFilter === "veg"
                    ? "border-green-600/30 bg-green-50 text-green-700"
                    : "border-black/[.08] bg-white text-neutral-600 hover:border-orange-300 hover:text-orange-600"
                }`}
              >
                <span className="h-2 w-2 rounded-full bg-green-600" />
                Veg
              </button>

              <button
                onClick={() =>{ 
                  setVegFilter(vegFilter === "nonveg" ? "all" : "nonveg");
                   setIsOpen(false);
                  }}
                className={`flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm font-medium ${
                  vegFilter === "nonveg"
                    ? "border-red-600/30 bg-red-50 text-red-700"
                    : "border-black/[.08] bg-white text-neutral-600 hover:border-orange-300 hover:text-orange-600"
                }`}
              >
                <span className="h-2 w-2 rounded-full bg-red-600" />
                Non-Veg
              </button>

              <button
                onClick={() => {
                  setPriceSort("none");
                  setVegFilter("all");
                  setIsOpen(false);
                }}
                className="text-sm font-medium text-orange-600 hover:underline"
              >
                Reset
              </button>
            </div>

            <div className="mt-4 flex flex-col gap-1">
              {categories.map((category, index) => (
                <button
                    key={index}
                    onClick={() => {
                      onSelectCategory(category.id);
                      setIsOpen(false);
                    }}
                    className={`rounded-lg px-3 py-2.5 text-left text-sm font-medium ${
                      category.id === selectedCategoryId
                        ? "bg-orange-50 text-orange-700"
                        : "text-neutral-700 hover:bg-neutral-100"
                    }`}
                  >
                    {category.name}
                  </button>
              ))}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
