"use client";

import { useState } from "react";
import Image from "next/image";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 text-gray-800 relative">
      {/* Header */}
      <header className="flex justify-between items-center py-6 px-8 border-b border-gray-200 backdrop-blur-sm">
        <h1 className="text-2xl font-bold tracking-tight">Sachin Verma</h1>

        {/* Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-700 text-2xl focus:outline-none md:hidden"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-gray-600 text-sm">
          {["About", "Skills", "Services", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-gray-900 transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 flex justify-end"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="bg-white w-2/3 max-w-xs h-full shadow-xl p-6 flex flex-col space-y-6 text-gray-700 text-lg animate-slideIn"
            onClick={(e) => e.stopPropagation()}
          >
            {["About", "Skills", "Services", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-600 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-20 px-6">
        <div className="bg-white shadow-xl rounded-2xl p-10 max-w-md mx-auto hover:shadow-2xl transition-all duration-300">
          <Image
            src="/profile.jpg"
            alt="Sachin Verma"
            width={120}
            height={120}
            className="rounded-full shadow-md border-4 border-white mb-6"
          />
          <h2 className="text-2xl font-bold mb-2">Sachin Verma</h2>
          <p className="text-gray-600 text-sm mb-2">@sachinverma769</p>
          <p className="text-gray-600 text-sm mb-6">
            Freelance Full-Stack Developer — .NET | Angular | React | Azure | SQL Server
          </p>

          <a
            href="https://wa.me/919459873319"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors justify-center"
          >
            <FaWhatsapp className="text-xl" />
            Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 border-t border-gray-200 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-6 text-gray-900">About Me</h3>

          <p className="text-gray-700 leading-relaxed text-lg text-left">
            I’m <strong>Sachin Verma</strong>, a <strong>freelance full-stack developer</strong> with over 
            <strong> 10 years of experience</strong> in building secure, scalable, and high-performance 
            web applications using <strong>.NET, Angular, React, SQL Server, Azure,</strong> and 
            <strong> PostgreSQL</strong>. I offer <strong>remote job support, project consulting,</strong> 
            and <strong>technical mentoring</strong> for professionals and teams worldwide.
          </p>

          <p className="text-gray-700 leading-relaxed text-lg mt-4 text-left">
            My focus is delivering end-to-end solutions using <strong>ASP.NET Core, Angular, React, REST APIs,</strong> 
            and <strong>Microsoft Azure</strong>. I help clients with <strong>backend optimization, database design,</strong> 
            and <strong>cloud deployments</strong>, ensuring fast, maintainable, and production-ready code.
          </p>

          <ul className="mt-6 text-gray-700 text-left list-disc list-inside space-y-2">
            <li>Debugging and enhancing .NET, Angular, and React apps</li>
            <li>Designing APIs and microservices architecture</li>
            <li>Implementing CI/CD and Azure cloud integration</li>
            <li>Developing responsive UIs with Angular and React</li>
            <li>Database design and tuning (SQL Server, PostgreSQL)</li>
            <li>One-on-one job support and mentoring sessions</li>
          </ul>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 bg-gray-50 border-t border-gray-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-900">
            ⚙️ Technical Skills & Expertise
          </h2>

          <p className="text-gray-700 leading-relaxed text-lg mb-8 text-left">
            I specialize in <strong>.NET, Angular, React, SQL Server, Azure,</strong> and 
            <strong> PostgreSQL</strong>, providing professional job support and real-world 
            project solutions for developers and teams globally.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700 text-base">
            <div>
              <h3 className="font-semibold mb-1">Frontend Development</h3>
              <p>Angular, React, TypeScript, HTML5, CSS3 — building fast, maintainable UIs.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Backend Development</h3>
              <p>ASP.NET Core, C#, Web API, Entity Framework — creating scalable, secure systems.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Database Management</h3>
              <p>SQL Server & PostgreSQL — schema design, optimization, performance tuning.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Cloud & DevOps</h3>
              <p>Azure — deployment, CI/CD pipelines, and infrastructure optimization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6 bg-white border-t border-gray-200">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-6 text-gray-900">Services I Offer</h3>
          <p className="text-gray-700 leading-relaxed text-lg mb-8 text-left">
            I offer <strong>freelance development</strong>, <strong>remote job support</strong>, 
            and <strong>technical consulting</strong> for developers and teams working on 
            enterprise applications and real-world projects.
          </p>

          <ul className="text-gray-700 text-left list-disc list-inside space-y-3">
            <li><strong>.NET Consulting:</strong> ASP.NET Core, Web API, and backend architecture</li>
            <li><strong>Angular & React Development:</strong> Modern, responsive, and dynamic UIs</li>
            <li><strong>Azure Cloud & DevOps:</strong> Deployment, CI/CD setup, and optimization</li>
            <li><strong>SQL Server & PostgreSQL:</strong> Database design and performance tuning</li>
            <li><strong>Code Review & Debugging:</strong> Improve reliability and maintainability</li>
            <li><strong>Remote Job Support:</strong> Real-time one-on-one guidance and troubleshooting</li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-b from-gray-50 via-white to-gray-100 border-t border-gray-200">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-6 text-gray-900">Get in Touch</h3>
          <p className="text-gray-700 leading-relaxed text-lg mb-8 text-left">
            Need help with <strong>.NET, Angular, React, SQL Server, PostgreSQL,</strong> or 
            <strong> Azure?</strong> I provide <strong>job support, consulting, and freelance development</strong> 
            for professionals and teams across the USA, Canada, and globally.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10">
            <a
              href="https://wa.me/919459873319"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors shadow-lg"
            >
              <FaWhatsapp className="text-xl" />
              Chat on WhatsApp
            </a>

            <a
              href="mailto:support@fullstackjobsupport.com"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-lg"
            >
              Send an Email
            </a>
          </div>

          <p className="text-gray-600 mt-10 text-sm">
            🌐 <strong>Website:</strong>{" "}
            <a
              href="https://fullstackjobsupport.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              fullstackjobsupport.com
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-sm text-gray-500 border-t">
        © {new Date().getFullYear()} Sachin Verma — All rights reserved.
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919459873319"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all z-50"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-3xl" />
      </a>

      {/* Animation */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </main>
  );
}
