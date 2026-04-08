import { Container } from "@/src/components/ui/Container";
import { Link } from "@/src/i18n/routing";

type Profession = {
  slug: string;
  name: string;
  fundsCount: number;
};

type Props = {
  professions: Profession[];
  fundsCountText: (count: number) => string;
  openText: string;
};

export function ProfessionList({ professions, fundsCountText, openText }: Props) {
  return (
    <Container className="mt-10 md:mt-14">
      <ul className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {professions.map((profession) => (
          <li key={profession.slug}>
            <Link
              href={`/services/${profession.slug}`}
              className="group flex items-center justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:bg-muted/70 hover:shadow-md"
            >
              <div>
                <h2 className="font-serif text-xl text-foreground">{profession.name}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{fundsCountText(profession.fundsCount)}</p>
              </div>
              <span className="text-sm font-semibold text-primary transition-transform group-hover:translate-x-1">
                {openText} →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
