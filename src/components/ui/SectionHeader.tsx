type Props = {
  title: string;
  subtitle?: string;
};

export function SectionHeader({ title, subtitle }: Props) {
  return (
    <div className="mb-8 text-center">
      <h1 className="font-serif text-3xl text-foreground md:text-4xl">{title}</h1>
      {subtitle ? <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground md:text-base">{subtitle}</p> : null}
    </div>
  );
}
