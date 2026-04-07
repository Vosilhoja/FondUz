import { Link } from "@/src/i18n/routing";

type Props = {
  currentPage: number;
  totalPages: number;
  basePath: string;
};

export function Pagination({ currentPage, totalPages, basePath }: Props) {
  if (totalPages <= 1) return null;
  const safePage = Math.min(Math.max(currentPage, 1), totalPages);

  return (
    <nav className="mt-8 flex items-center justify-center gap-2" aria-label="Pagination">
      {Array.from({ length: totalPages }).map((_, idx) => {
        const page = idx + 1;
        const isActive = page === safePage;
        return (
          <Link
            key={page}
            href={`${basePath}?page=${page}`}
            className={`inline-flex h-9 min-w-9 items-center justify-center rounded-md border px-3 text-sm ${
              isActive
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-foreground hover:bg-muted"
            }`}
          >
            {page}
          </Link>
        );
      })}
    </nav>
  );
}
