import { RotateCcw } from "lucide-react";
import Image from "next/image";
import Container from "@/components/Container";

type OrderStatus = "delivered" | "cancelled";

type Order = {
  id: number;
  restaurantName: string;
  image: string;
  status: OrderStatus;
  statusLabel: string;
  itemsSummary: string;
  date: string;
  total: string;
};

const STATUS_STYLES: Record<OrderStatus, string> = {
  delivered: "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-400",
  cancelled: "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-400",
};

const previousOrders: Order[] = [
  {
    id: 101,
    restaurantName: "Spice Route",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=200&q=75&auto=format&fit=crop",
    status: "delivered",
    statusLabel: "Delivered",
    itemsSummary: "1x Butter Chicken, 2x Garlic Naan",
    date: "10 Sept 2026",
    total: "₹418",
  },
  {
    id: 98,
    restaurantName: "Noodle Bar",
    image: "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=200&q=75&auto=format&fit=crop",
    status: "delivered",
    statusLabel: "Delivered",
    itemsSummary: "1x Veg Hakka Noodles, 1x Chilli Paneer",
    date: "7 Sept 2026",
    total: "₹356",
  },
  {
    id: 95,
    restaurantName: "Biryani House",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=200&q=75&auto=format&fit=crop",
    status: "cancelled",
    statusLabel: "Cancelled",
    itemsSummary: "2x Chicken Biryani",
    date: "4 Sept 2026",
    total: "₹498",
  },
];

// Static UI only — mirrors GET /v1/orders, needs an authenticated user for real data.
export default function PreviousOrders() {
  return (
    <Container className="py-12" as="section">
      <p className="text-sm font-semibold uppercase tracking-wide text-orange-600">
        Order history
      </p>
      <h2 className="mt-1 text-2xl font-bold text-neutral-900 dark:text-neutral-50">
        Your previous orders
      </h2>

      <div className="mt-5 flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {previousOrders.map((order) => (
          <div
            key={order.id}
            className="flex w-80 shrink-0 gap-3 rounded-2xl border border-black/[.06] bg-white p-3 shadow-sm transition-shadow hover:shadow-md dark:border-white/[.08] dark:bg-neutral-900"
          >
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl">
              <Image src={order.image} alt={order.restaurantName} fill sizes="64px" className="object-cover" />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-2">
                <h3 className="truncate font-semibold text-neutral-900 dark:text-neutral-50">
                  {order.restaurantName}
                </h3>
                <span
                  className={`shrink-0 rounded-full px-2 py-0.5 text-[11px] font-semibold ${STATUS_STYLES[order.status]}`}
                >
                  {order.statusLabel}
                </span>
              </div>

              <p className="mt-1 truncate text-xs text-neutral-500 dark:text-neutral-400">
                {order.itemsSummary}
              </p>

              <div className="mt-2 flex items-center justify-between">
                <div className="text-xs text-neutral-400">
                  {order.date} · {order.total}
                </div>
                <button className="flex items-center gap-1 rounded-full border border-orange-200 px-2.5 py-1 text-xs font-semibold text-orange-600 transition-colors hover:bg-orange-50 dark:border-orange-900 dark:hover:bg-orange-950">
                  <RotateCcw className="h-3 w-3" />
                  Reorder
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
