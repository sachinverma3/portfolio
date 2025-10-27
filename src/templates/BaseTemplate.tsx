import Head from "next/head";
import React from "react";

export const BaseTemplate = (props: {
  leftNav: React.ReactNode;
  rightNav?: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="content-language" content="en-US" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="canonical" href="https://fullstackjobsupport.com" />
        <link rel="alternate" href="https://fullstackjobsupport.com" hreflang="en" />
        <link rel="alternate" href="https://fullstackjobsupport.com" hreflang="x-default" />

        <title>Sachin Verma | Full-Stack .NET, Angular, React, Azure Developer</title>
        <meta
          name="description"
          content="Sachin Verma — Freelance full-stack developer providing .NET, Angular, React, and Azure job support for professionals and companies in the USA and worldwide."
        />
        <meta
          name="keywords"
          content=".NET, Angular, React, Azure, SQL Server, PostgreSQL, Full Stack Developer, Job Support, Freelance Developer, Remote Developer, USA"
        />
        <meta name="author" content="Sachin Verma" />

        {/* Open Graph */}
        <meta property="og:title" content="Sachin Verma | Full-Stack .NET, Angular, React, Azure Developer" />
        <meta property="og:description" content="Experienced freelance developer providing remote job support, consulting, and project development." />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fullstackjobsupport.com/" />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sachin Verma | Full-Stack Developer" />
        <meta name="twitter:description" content="10+ years of experience in .NET, Angular, React, and Azure." />
        <meta name="twitter:image" content="/og-image.jpg" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sachin Verma",
              jobTitle: "Full-Stack Developer",
              url: "https://fullstackjobsupport.com",
              worksFor: { "@type": "Organization", name: "Full Stack Job Support" },
              sameAs: [
                "https://linkedin.com/in/YOUR-LINKEDIN",
                "https://x.com/YOUR-TWITTER",
              ],
              knowsAbout: [
                ".NET",
                "Angular",
                "React",
                "Azure",
                "SQL Server",
                "PostgreSQL",
                "Freelance Developer",
                "Job Support",
              ],
            }),
          }}
        />
      </Head>

      <div className="w-full px-1 text-gray-700 antialiased">
        <div className="mx-auto max-w-screen-md">
          <main>{props.children}</main>
        </div>
      </div>
    </>
  );
};
