import type { ReactNode } from "react";

interface ArticleTwoProps {
  children: ReactNode;
}

export default function ArticleTwo({ children }: ArticleTwoProps) {
  return <section className="flex flex-col gap-15 py-20">{children}</section>;
}
