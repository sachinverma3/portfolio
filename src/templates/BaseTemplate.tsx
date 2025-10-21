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

          <footer className="border-t border-gray-200 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 py-8 px-4 text-center">
            <div className="flex flex-col items-center justify-center gap-3">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Built with <span className="text-rose-500 animate-pulse">♥</span> using
              </p>

              <div className="flex items-center justify-center gap-4">
                <div className="flex items-center gap-1">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                    alt="Next.js"
                    className="w-5 h-5"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Next.js</span>
                </div>

                <div className="flex items-center gap-1">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                    alt="Tailwind"
                    className="w-5 h-5"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Tailwind</span>
                </div>

                <div className="flex items-center gap-1">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                    alt="TypeScript"
                    className="w-5 h-5"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">TypeScript</span>
                </div>
              </div>

              <div className="mt-3 text-xs text-gray-400 dark:text-gray-500">
                © {new Date().getFullYear()} Crafted by{" "}
                <span className="font-medium text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors">
                  Sachin Verma
                </span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};
