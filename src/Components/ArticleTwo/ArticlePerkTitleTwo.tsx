import type { ReactNode } from "react";

interface ArticlePerkTitleTwoProps {
  children: ReactNode;
}

export default function ArticlePerkTitleTwo({
  children,
}: ArticlePerkTitleTwoProps) {
  return <h3 className="text-xl font-semibold">{children}</h3>;
}
