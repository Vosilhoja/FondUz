type Article = {
  title: string;
  date: string;
  category: string;
};

type Props = {
  articles: Article[];
  readMoreText: string;
};

export function BlogList({ articles, readMoreText }: Props) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((article, i) => (
        <article
          key={`${article.title}-${i}`}
          className="flex flex-col rounded-2xl border border-border bg-card p-5 md:p-6 shadow-sm transition-all hover:shadow-md"
        >
          <div className="flex flex-wrap gap-2 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
            <span>{article.category}</span>
            <span>{article.date}</span>
          </div>
          <h3 className="mt-3 font-serif text-lg text-foreground">{article.title}</h3>
          <button
            type="button"
            className="mt-4 w-fit text-left text-xs font-semibold uppercase tracking-wide text-primary hover:underline"
          >
            {readMoreText}
          </button>
        </article>
      ))}
    </div>
  );
}
