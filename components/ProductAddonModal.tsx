"use client";

import { ImageIcon, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function ProductAddonModal({
  isOpen,
  onClose,
  product,
}: {
  isOpen: boolean;
  onClose: () => void;
  product: any;
}) {


  const [activeGroupId, setActiveGroupId] = useState<number | null>(null);
  const groups = product?.addon_groups || [];
const activeGroup = groups.find((g: any) => g.id === activeGroupId) || groups[0];

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
    console.log("ProductAddonModal rendered with product:", product),
    <>
      {isOpen &&
        createPortal(
          <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 sm:items-center">
            <div className="absolute inset-0" onClick={onClose} />

            <div className="relative flex max-h-[90vh] w-full max-w-md flex-col overflow-hidden rounded-t-2xl bg-white shadow-xl dark:bg-neutral-900 sm:rounded-2xl">
              {/* Header */}
              <div className="flex items-start gap-3 border-b border-black/[.06] p-5 dark:border-white/[.08]">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-neutral-100 dark:bg-neutral-800">
                  {product?.image && (
                    <Image
                      src={product.image}
                      alt={product?.name || ""}
                      className="h-7 w-7 text-neutral-300 dark:text-neutral-600"
                    />
                  )}
                  {!product?.image && (
                     <ImageIcon className="h-7 w-7 text-neutral-300 dark:text-neutral-600" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">{product?.name}</h3>
                  <p className="mt-0.5 line-clamp-2 text-xs text-neutral-500 dark:text-neutral-400">
                    {product?.description}
                  </p>
                </div>
                <button onClick={onClose} className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800">
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Tabs */}
              <div className="flex gap-2 overflow-x-auto border-b border-black/[.06] px-5 pt-3 dark:border-white/[.08]">
                {groups.map((group: any) => (
                      <button
                        key={group.id}
                        onClick={() => setActiveGroupId(group.id)}
                        className={`shrink-0 whitespace-nowrap px-3 py-2 text-sm font-semibold ${
                          activeGroup?.id === group.id
                            ? "border-b-2 border-orange-600 text-orange-600"
                            : "text-neutral-500"
                        }`}
                      >
                        {group.name.toUpperCase()}
                      </button>
                    ))}
              </div>

              {/* Groups */}
              {activeGroup && (
                <div className=" p-5">
                  <div className="flex items-center justify-between">
                    {activeGroup.is_required && (
                      <span className="rounded-full bg-orange-50 px-2 py-0.5 text-[10px] font-semibold text-orange-700">
                        Required
                      </span>
                    )}
                  </div>

                  <div className="mt-2 divide-y divide-black/[.04] max-h-[180px] overflow-y-auto dark:divide-white/[.06]">
                    {activeGroup.addons?.map((addon: any) => (
                      <button key={addon.id} className="flex w-full items-center justify-between py-2.5 text-left">
                        <span className="text-sm text-neutral-700">{addon.name}</span>
                        <span className="flex items-center gap-3">
                          <span className="text-sm font-medium text-neutral-500">
                            {addon.price.minor === 0 ? "Free" : `₹${addon.price.amount}`}
                          </span>
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-black/[.15]">
                            <span className="h-2 w-2 rounded-full bg-white" />
                          </span>
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-black/[.06] p-5 dark:border-white/[.08]">
                <p className="text-lg font-bold text-neutral-900 dark:text-neutral-50">{product?.base_price?.amount}</p>
                <button className="rounded-full bg-orange-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-orange-700">
                  Add +
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
