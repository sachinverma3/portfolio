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
         <link rel="canonical" href="https://fullstackjobsupport.com" />
        {/* Basic Meta */}
        <title>Sachin Verma | Full-Stack .NET, Angular, React, Azure Developer</title>
        <meta
          name="description"
          content="Sachin Verma — Freelance full-stack developer specializing in .NET, Angular, React, Azure, SQL Server, and PostgreSQL. Providing job support and consulting for global clients."
        />
        <meta name="author" content="Sachin Verma" />
        <meta name="keywords" content=".NET, Angular, React, Azure, SQL Server, PostgreSQL, Full Stack Developer, Job Support, Freelance Developer" />

        {/* Open Graph (for LinkedIn, WhatsApp, Facebook) */}
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
      </Head>

      <div className="w-full px-1 text-gray-700 antialiased">
        <div className="mx-auto max-w-screen-md">
          <main>{props.children}</main> 
        </div>
      </div>
    </>
  );
};
