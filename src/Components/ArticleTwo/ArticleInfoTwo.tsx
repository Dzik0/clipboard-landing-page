import type { ReactNode } from "react";

interface ArticleInfoTwoProps {
  children: ReactNode;
}

export default function ArticleInfoTwo({ children }: ArticleInfoTwoProps) {
  return <p className="text-my-gray-500 leading-7">{children}</p>;
}
