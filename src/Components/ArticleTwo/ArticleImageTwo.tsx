interface ArticleImageTwoProps {
  src: string;
}

export default function ArticleImageTwo({ src }: ArticleImageTwoProps) {
  return (
    <>
      <div className="md:hidden">
        <div className="mx-auto max-w-130">
          <img src={src} alt={`${src} logo`} />
        </div>
      </div>
      <div className="relative hidden basis-1/2 md:block">
        <div className="absolute top-1/2 -left-15 w-100 -translate-y-1/2">
          <img src={src} alt="Computer image" />
        </div>
      </div>
    </>
  );
}
