

type Props = {
  title: string;
  subtitle: string;
};

export function ContactsHero({ title, subtitle }: Props) {
  return (
    <div className="text-center lg:text-left">
      <h1 className="font-serif text-3xl text-foreground md:text-4xl lg:text-5xl">{title}</h1>
      <p className="mt-4 max-w-2xl text-sm text-muted-foreground md:text-base">{subtitle}</p>
    </div>
  );
}
