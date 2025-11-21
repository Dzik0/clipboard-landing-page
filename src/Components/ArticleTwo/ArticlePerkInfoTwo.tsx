import type { ReactNode } from "react";

interface ArticlePerkInfoTwoProps {
  children: ReactNode;
}

export default function ArticlePerkInfoTwo({
  children,
}: ArticlePerkInfoTwoProps) {
  return (
    <p className="text-my-gray-500 text-center md:text-left">{children}</p>
  );
}
