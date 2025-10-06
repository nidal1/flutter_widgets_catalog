import { Geist, Geist_Mono, Cairo } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import '../globals.css';
import GoogleAnalytics from '@/components/GoogleAnalytics';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const cairo = Cairo({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-cairo',
});

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  let messages;
  const { locale } = await params;
  if (!locale) {
    throw new Error('Locale not found');
  }

  const isAr = locale === 'ar';
  try {
    messages = await getMessages({ locale });
  } catch (error) {
    console.log('🚀 ~ LocaleLayout ~ error:', error);
    console.error('Could not load messages, see next-intl docs');
  }
  return (
    <html lang={locale} dir={isAr ? 'rtl' : 'ltr'}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>
          {isAr ? 'كتالوج ودجات فلاتر ' : 'Flutter Widgets Catalog'}
        </title>
        <meta
          name="description"
          content="An interactive catalog of Flutter widgets."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${
          isAr ? cairo.variable : ''
        } antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <GoogleAnalytics />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
