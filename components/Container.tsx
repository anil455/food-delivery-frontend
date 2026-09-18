import type { ElementType, ReactNode } from "react";

// Max width 1920px, 80px side padding on large screens (scales down below lg
// so content doesn't get crushed on mobile).
export default function Container({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}) {
  return (
    <Tag className={`mx-auto w-full max-w-[1920px] px-4 sm:px-6 lg:px-20 ${className}`}>
      {children}
    </Tag>
  );
}
