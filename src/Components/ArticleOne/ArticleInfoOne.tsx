import type { ReactNode } from "react";

interface InfoProps {
  children: ReactNode;
}

export default function ArticleInfoOne({ children }: InfoProps) {
  return (
    <p className="text-my-gray-500 text-center leading-7 md:px-50">
      {children}
    </p>
  );
}
