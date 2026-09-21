"use client";

import { ImageIcon, X } from "lucide-react";
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
  return (
    <>
      {isOpen &&
        createPortal(
          <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 sm:items-center">
            <div className="absolute inset-0" onClick={onClose} />

            <div className="relative flex max-h-[90vh] w-full max-w-md flex-col overflow-hidden rounded-t-2xl bg-white shadow-xl dark:bg-neutral-900 sm:rounded-2xl">
              {/* Header */}
              <div className="flex items-start gap-3 border-b border-black/[.06] p-5 dark:border-white/[.08]">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-neutral-100 dark:bg-neutral-800">
                  <ImageIcon className="h-7 w-7 text-neutral-300 dark:text-neutral-600" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">Product Name</h3>
                  <p className="mt-0.5 line-clamp-2 text-xs text-neutral-500 dark:text-neutral-400">
                    Product description goes here.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Groups */}
              <div className="flex-1 overflow-y-auto p-5">
                <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">Customize your order</h4>

                {/* Ek example group block — asli code me product.addon_groups.map() se yeh repeat hoga */}
                <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-orange-600">GROUP NAME</p>
                    <span className="rounded-full bg-orange-50 px-2 py-0.5 text-[10px] font-semibold text-orange-700 dark:bg-orange-950">
                      Required
                    </span>
                  </div>

                  <div className="mt-2 divide-y divide-black/[.04] dark:divide-white/[.06]">
                    {/* Ek example addon row — asli code me group.addons.map() se yeh repeat hoga */}
                    <button className="flex w-full items-center justify-between py-2.5 text-left">
                      <span className="text-sm text-neutral-700 dark:text-neutral-300">Addon Name</span>
                      <span className="flex items-center gap-3">
                        <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Free</span>
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-black/[.15] dark:border-white/[.2]">
                          <span className="h-2 w-2 rounded-full bg-white" />
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-black/[.06] p-5 dark:border-white/[.08]">
                <p className="text-lg font-bold text-neutral-900 dark:text-neutral-50">₹0.00</p>
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
