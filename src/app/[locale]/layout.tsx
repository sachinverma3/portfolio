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
    ".NET developer, Angular developer, React developer, Azure expert, freelance full stack developer, remote job support, Sachin Verma, developer India, software consultant, global freelance developer, web developer worldwide",
  openGraph: {
    title: "Sachin Verma | Full-Stack .NET, Angular, React, Azure Developer",
    description:
      "Freelance developer providing remote job support, consulting, and project development in .NET, Angular, React, and Azure.",
    url: "https://fullstackjobsupport.com",
    siteName: "Sachin Verma Portfolio",
    images: [
      {
        url: "https://fullstackjobsupport.com/og-image.jpg",
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
      "10+ years experience in .NET, Angular, React, and Azure. Remote job support and freelance projects globally.",
    creator: "@sachinverma769",
    images: ["https://fullstackjobsupport.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://fullstackjobsupport.com",
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
      <head>
        <link rel="canonical" href="https://fullstackjobsupport.com/" />
        <link rel="alternate" hrefLang="en" href="https://fullstackjobsupport.com/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sachin Verma",
              jobTitle: "Freelance Full Stack Developer",
              url: "https://fullstackjobsupport.com",
              sameAs: [
                "https://linkedin.com/in/sachinverma769",
                "https://github.com/sachinverma769",
              ],
              description:
                "Sachin Verma is a freelance full-stack developer specializing in .NET, Angular, React, and Azure. Offering global job support and project development.",
              worksFor: {
                "@type": "Organization",
                name: "FullStackJobSupport",
              },
              knowsAbout: [".NET", "Angular", "React", "Azure", "SQL Server", "Web Development"],
            }),
          }}
        />
      </head>
      <body>
        <NextIntlClientProvider>
          <PostHogProvider>{props.children}</PostHogProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
