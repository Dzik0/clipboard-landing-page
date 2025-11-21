import type { ReactNode } from "react";

interface ArticlePerkTwoProps {
  children: ReactNode;
}

export default function ArticlePerkTwo({ children }: ArticlePerkTwoProps) {
  return (
    <div className="flex flex-col items-center gap-5 md:items-start">
      {children}
    </div>
  );
}
