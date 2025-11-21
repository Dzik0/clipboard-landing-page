interface ImageProps {
  src: string;
}

export default function ArticleImageOne({ src }: ImageProps) {
  return (
    <div className="flex justify-center md:max-w-150">
      <img src={src} alt="Logo" />
    </div>
  );
}
