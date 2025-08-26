import "./globals.css";
import "./fonts.css";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../locales/${locale}.json`)).default;

  return {
    title: messages.title,
    description: messages.description,
  };
}

export default function LocaleLayout({ children, params: { locale } }) {
  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
