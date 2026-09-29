"use client";

import { ImageIcon, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function ProductAddonModal({
  isOpen,
  onClose,
  product,
  onAdd,
}: {
  isOpen: boolean;
  onClose: () => void;
  product: any;
  onAdd: (selection: { addons: any[]; total: number }) => void;
}) {


  const [activeGroupId, setActiveGroupId] = useState<number | null>(null);

  const [selectedAddonIds, setSelectedAddonIds] = useState<any[]>([]);

  const groups = product?.addon_groups || [];
const activeGroup = groups.find((g: any) => g.id === activeGroupId) || groups[0];



const allAddons = groups.flatMap((g: any) => g.addons);
const addonsTotalMinor = allAddons.filter((a: any) => selectedAddonIds.includes(a.id))
  .reduce((sum: any, a: any) => sum + a.price.minor, 0);
const totalMinor = (product?.base_price?.minor || 0) + addonsTotalMinor;
const total = totalMinor / 100;

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


useEffect(() => {
  if (!isOpen) return;

  setActiveGroupId(null);

  const defaults = groups
    .filter((g: any) => g.max_select === 1 && g.is_required)
    .map((g: any) => g.addons.find((a: any) => a.price.minor === 0)?.id)
    .filter(Boolean);

  setSelectedAddonIds(defaults);
}, [isOpen, product]);






function toggleAddon(addonId: any, group: any) {
 if (group.max_select === 1) {
  const groupIds = getExclusiveIds(group);

  setSelectedAddonIds((prev) => {
    const withoutGroup = prev.filter((id) => !groupIds.includes(id));
   if (prev.includes(addonId)) {
        if (isFamilyRequired(group)) {
          return prev; 
        } else {
          return withoutGroup;
        }

      } else {
        const newList = [...withoutGroup, addonId];
        return newList;
      }
  });
  return;
}
 
  setSelectedAddonIds((prev) =>
    prev.includes(addonId)
      ? prev.filter((id) => id !== addonId)
      : [...prev, addonId]
  );
}
console.log("selected:", selectedAddonIds);



function getExclusiveIds(group: any) {
  if (!group.exclusive_key) return group.addons.map((a: any) => a.id);
  return groups
    .filter((g: any) => g.exclusive_key === group.exclusive_key)
    .flatMap((item: any) => item.addons.map((a: any) => a.id));
}

function isFamilyRequired(group: any) {
  if (!group.exclusive_key) return group.is_required;
  return groups.some(
    (g: any) => g.exclusive_key === group.exclusive_key && g.is_required
  );
}


function isGroupSatisfied(group: any) {
  if (!group.is_required) return true;
  const ids = getExclusiveIds(group);
  return selectedAddonIds.some((id) => ids.includes(id));
}



const canAdd = groups.every((g: any) => isGroupSatisfied(g));
console.log("canAdd:", canAdd);

function handleAdd() {
  const selectedAddons = allAddons.filter((a: any) =>
    selectedAddonIds.includes(a.id)
  );
  onAdd({ addons: selectedAddons, total });
  onClose();
}


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
                  <div className="flex items-center justify-end">
                    {activeGroup.is_required && (
                      <span
                        className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                          isGroupSatisfied(activeGroup)
                            ? "bg-orange-50 text-orange-700"
                            : "bg-red-50 text-red-700"
                        }`}
                      >
                        Required
                      </span>
                    )}
                  </div>

                  <div className="mt-2 divide-y divide-black/[.04] max-h-[180px] overflow-y-auto dark:divide-white/[.06]">
                    {activeGroup.addons?.map((addon: any) => {
                      const isChecked = selectedAddonIds.includes(addon.id);
                      return (
                      <button key={addon.id} onClick={() => toggleAddon(addon.id, activeGroup)} className="flex w-full items-center justify-between py-2.5 text-left">
                        <span className="text-sm text-neutral-700">{addon.name}</span>
                        <span className="flex items-center gap-3">
                          <span className="text-sm font-medium text-neutral-500">
                            {addon.price.minor === 0 ? "Free" : `₹${addon.price.amount}`}
                          </span>
                          <span
                          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
                            isChecked ? "border-orange-600 bg-orange-600" : "border-black/[.15]"
                          }`}>
                          {isChecked && <span className="h-2 w-2 rounded-full bg-white" />}
                        </span>
                        </span>
                      </button>
                     );}
                     )}
                  </div>
                </div>
              )}

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-black/[.06] p-5 dark:border-white/[.08]">
                <p className="text-lg font-bold text-neutral-900 dark:text-neutral-50">₹{total.toFixed(2)}</p>
                <button onClick={handleAdd} disabled={!canAdd} className="rounded-full bg-orange-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-orange-700
                disabled:cursor-not-allowed disabled:opacity-50">
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
