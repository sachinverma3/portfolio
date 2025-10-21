 
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { PostHogProvider } from '@/components/analytics/PostHogProvider'; 
import { routing } from '@/libs/I18nRouting';
import '@/styles/global.css';

export const metadata = {
  title: "Sachin Verma | Full-Stack .NET, Angular, React, Azure Developer",
  description:
    "I'm Sachin Verma, a freelance full-stack developer with 10+ years of experience in .NET, Angular, React, and Azure. I help professionals and teams with job support, project development, and consulting.",
  keywords:
    ".NET developer, Angular developer, React developer, Azure expert, freelance full stack developer, remote job support, Sachin Verma, developer India, software consultant",
  openGraph: {
    title: "Sachin Verma | Full-Stack .NET, Angular, React, Azure Developer",
    description:
      "Freelance developer providing remote job support, consulting, and project development in .NET, Angular, React, and Azure.",
    url: "https://fullstackjobsupport.com",
    siteName: "Sachin Verma Portfolio",
    images: [
      {
        url: "https://fullstackjobsupport.com/og-image.jpg", // replace with your hosted image
        width: 1200,
        height: 630,
        alt: "Sachin Verma Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sachin Verma | Full-Stack Developer",
    description:
      "10+ years experience in .NET, Angular, React, Azure. Remote job support and freelance projects.",
    creator: "@sachinverma769",
    images: ["https://fullstackjobsupport.com/og-image.jpg"],
  },
};


export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          <PostHogProvider>
            {props.children}
          </PostHogProvider> 
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
