import { Flame, ImageIcon, Minus, Plus, Star } from "lucide-react";

export default function ProductCard({product}: {product:any;}) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-black/[.06] bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl dark:border-white/[.08] dark:bg-neutral-900">
      <div className="relative h-40 overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900">
        <div className="flex h-full items-center justify-center">
          <ImageIcon className="h-10 w-10 text-neutral-300 dark:text-neutral-600" />
        </div>

        <span
          className={`absolute left-3 top-3 flex h-5 w-5 items-center justify-center rounded-md border-2 bg-white shadow-sm ${
            product?.is_veg ? "border-green-600" : "border-red-600"
          }`}
        >
          {product?.is_veg ? (
            <span className="h-2 w-2 rounded-full bg-green-600" />
          ) : (
            <span
              className="h-0 w-0 border-x-[5px] border-b-[8px] border-x-transparent border-b-red-600"
            />
          )}
        </span>

        <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-orange-600 px-2 py-0.5 text-[11px] font-semibold text-white shadow-sm">
          <Flame className="h-3 w-3" />
          Bestseller
        </span>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">
            {product?.name}
          </h3>
          <span className="flex shrink-0 items-center gap-0.5 rounded-md bg-green-50 px-1.5 py-0.5 text-xs font-semibold text-green-700 dark:bg-green-950 dark:text-green-400">
            <Star className="h-3 w-3 fill-green-700 dark:fill-green-400" />
            4.3
          </span>
        </div>

        <p className="mt-1 line-clamp-2 text-sm text-neutral-500 dark:text-neutral-400">
          {product?.description}
        </p>

        <div className="mt-3 flex items-center justify-between border-t border-dashed border-black/[.06] pt-3 dark:border-white/[.08]">
          <div>
            <div className="flex items-baseline gap-1.5">
              <p className="text-base font-bold text-neutral-900 dark:text-neutral-50">
                ₹{product?.base_price?.amount}
              </p>
              {product?.compare_at_price && (
                  <p className="text-xs text-neutral-400 line-through">
                    ₹{product.compare_at_price.amount}
                  </p>
                )}
            </div>
            <p className="text-xs text-neutral-400">20 mins</p>
          </div>

          <div className="flex items-center gap-3 rounded-full bg-orange-600 px-1 py-1 text-white shadow-sm shadow-orange-600/30">
            <button className="flex h-6 w-6 items-center justify-center rounded-full hover:bg-white/20">
              <Minus className="h-3.5 w-3.5" />
            </button>
            <span className="w-3 text-center text-sm font-semibold">1</span>
            <button className="flex h-6 w-6 items-center justify-center rounded-full hover:bg-white/20">
              <Plus className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
