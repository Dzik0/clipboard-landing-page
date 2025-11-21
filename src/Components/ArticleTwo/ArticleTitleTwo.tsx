import type { ReactNode } from "react";

interface ArticleTitleTwoProps {
  children: ReactNode;
}

export default function ArticleTitleTwo({ children }: ArticleTitleTwoProps) {
  return <h2 className="text-3xl font-semibold">{children}</h2>;
}
