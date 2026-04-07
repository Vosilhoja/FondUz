export type Doctor = {
  id: string;
  name: string;
  profession: string;
  email: string;
  phone: string;
  bio: string;
  image: string;
};

export type NewsItem = {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  image: string;
  content: string[];
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type ServiceProfession = {
  slug: string;
  name: string;
  fundsCount: number;
};

export type FundItem = {
  id: string;
  professionSlug: string;
  name: string;
  phone: string;
  website: string;
  description?: string;
};

export type PriceItem = {
  id: string;
  title: string;
  price: string;
  includes: string[];
};
