import { PlusCircle, X } from "lucide-react";

export default function RepeatCustomizationModal({isOpen,productName,total,onRepeat, onAddNew, onClose, }: {
  isOpen: boolean; 
  productName: any;
  total: number;
  onClose: () => void;
  onRepeat: () => void;
  onAddNew: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 sm:items-center">
      <div className="relative w-full max-w-md rounded-t-2xl bg-white p-5 shadow-xl dark:bg-neutral-900 sm:rounded-2xl">
        {/* Header */}
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
            Repeat last customisation
          </h3>
          <button 
            onClick={onClose}
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Product + price */}
        <div className="mt-4 flex items-start justify-between gap-3">
          <p className="text-sm font-medium text-neutral-700 dark:text-neutral-200">
            {productName}
          </p>
          <div className="text-right">
            <p className="text-lg font-bold text-neutral-900 dark:text-neutral-50">
              ₹{total}
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              Including base price ₹{total}
            </p>
          </div>
        </div>

        {/* Actions */}
        <button onClick={onRepeat} className="mt-5 w-full rounded-xl bg-orange-600 py-3 text-sm font-semibold text-white hover:bg-orange-700">
          Repeat Last Customization
        </button>

        <div className="my-4 border-t border-black/[.06] dark:border-white/[.08]" />

        <button onClick={onAddNew} className="flex w-full items-center justify-center gap-2 py-2 text-sm font-semibold text-neutral-800 dark:text-neutral-100">
          <PlusCircle className="h-5 w-5" />
          Add New Customization
        </button>
      </div>
    </div>
  );
}
