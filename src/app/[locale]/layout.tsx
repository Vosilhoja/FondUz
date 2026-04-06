import "@/src/styles/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
<<<<<<< HEAD
import { Inter, Fraunces } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-serif',
})
=======
>>>>>>> 0442d2e69fe3c52979a9449dd1298340240bc1cc

export default async function LocaleLayout({children, params}: {children: React.ReactNode, params: {locale: string}}) {
  const { locale } = await params
  const messages = await getMessages()
  
  return (
<<<<<<< HEAD
    <html lang={ locale } className={`${inter.variable} ${fraunces.variable}`}>
      <body className="antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
=======
    <html lang={ locale }>
      <body>
        <NextIntlClientProvider messages={messages}>
>>>>>>> 0442d2e69fe3c52979a9449dd1298340240bc1cc
          { children }
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
