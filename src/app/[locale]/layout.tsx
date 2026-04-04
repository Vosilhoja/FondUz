import "@/src/styles/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Inter, Fraunces } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-serif',
})

export default async function LocaleLayout({children, params}: {children: React.ReactNode, params: {locale: string}}) {
  const { locale } = await params
  const messages = await getMessages()
  
  return (
    <html lang={ locale } className={`${inter.variable} ${fraunces.variable}`}>
      <body className="antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          { children }
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
