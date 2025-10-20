"use client";

import Image from "next/image";
import ContactCard from "@/components/ContactCard";
import { FaWhatsapp } from "react-icons/fa"; 
export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 text-gray-800 relative">
      {/* Header */}
      <header className="flex justify-between items-center py-6 px-8 border-b border-gray-200 backdrop-blur-sm">
        <h1 className="text-2xl font-bold tracking-tight">Sachin Verma</h1>
        <nav className="flex gap-8 text-gray-600 text-sm">
          <a href="#about" className="hover:text-gray-900 transition-colors">
            About
          </a>
          <a href="#skills" className="hover:text-gray-900 transition-colors">
            Skills
          </a>
          <a href="#services" className="hover:text-gray-900 transition-colors">
            Services
          </a>
          <a href="#contact" className="hover:text-gray-900 transition-colors">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-20 px-6">
        <div className="bg-white shadow-xl rounded-2xl p-10 max-w-md mx-auto transition-all duration-300 hover:shadow-2xl">
          <div className="flex justify-center mb-6">
            <Image
              src="/profile.jpg"
              alt="Sachin Verma"
              width={120}
              height={120}
              className="rounded-full shadow-md border-4 border-white"
            />
          </div>
          <h2 className="text-2xl font-bold mb-2">Sachin Verma</h2>
          <p className="text-gray-600 text-sm mb-4">@sachinverma769</p>
          <p className="text-gray-600 text-sm mb-6">
            Freelance Full-Stack Developer — .NET | Angular | React | Azure
          </p>

          <div className="flex justify-center gap-4">
            {/* <a
              href="#projects"
              className="px-5 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-5 py-2 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              Contact
            </a> */}
          </div>

          {/* WhatsApp Button under Hero */}
          <div className="flex justify-center mt-6">
            <a
              href="https://wa.me/919459873319" // ✅ Replace with your WhatsApp number (e.g. 91XXXXXXXXXX)
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors"
            >
              <FaWhatsapp className="text-xl" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-16 px-6 border-t border-gray-200 bg-white"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-xl font-semibold mb-6">About Me</h3>
          <p className="text-gray-700 leading-relaxed text-lg text-left">
            I’m a freelance full-stack developer with over{" "}
            <strong>10 years</strong> of experience in designing, developing,
            and supporting enterprise-level applications. I specialize in{" "}
            <strong>
              .NET, Angular, React, Azure, SQL Server,
            </strong>{" "}
            and <strong>PostgreSQL</strong>, helping professionals and teams
            solve real-world technical challenges efficiently.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mt-4 text-left">
            I provide job support, project development, and consulting services,
            focusing on delivering scalable, high-performance, and maintainable
            solutions. With deep hands-on experience across backend, frontend,
            and cloud technologies, I assist in both individual mentoring and
            end-to-end project execution.
          </p>

          <ul className="mt-6 text-gray-700 text-left list-disc list-inside space-y-2">
            <li>Debugging and enhancing existing applications</li>
            <li>Designing scalable APIs and microservices</li>
            <li>Cloud deployment and integration (Azure)</li>
            <li>UI/UX development using Angular or React</li>
            <li>
              Database design and performance tuning (SQL Server, PostgreSQL)
            </li>
          </ul>
        </div>
      </section>

      {/* Technical Skills */}
      <section
        id="skills"
        className="py-16 px-6 bg-gray-50 border-t border-gray-200"
      >
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-6 text-center">
            ⚙️ Technical Skills
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700 text-base">
            <div>
              <strong>Frontend:</strong> Angular, React, TypeScript, HTML, CSS,
              JavaScript
            </div>
            <div>
              <strong>Backend:</strong> ASP.NET Core, C#, Web API, Entity
              Framework
            </div>
            <div>
              <strong>Database:</strong> SQL Server, PostgreSQL
            </div>
            <div>
              <strong>Cloud:</strong> Microsoft Azure (App Services, Functions,
              Storage, SQL)
            </div>
            <div>
              <strong>Tools:</strong> Git, Visual Studio, Azure DevOps, Postman
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="py-16 px-6 bg-white border-t border-gray-200"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-xl font-semibold mb-6">🤝 Services I Offer</h3>
          <ul className="text-gray-700 text-left list-disc list-inside space-y-2">
            <li>Remote job support (daily/weekly basis)</li>
            <li>Freelance project development (end-to-end or modular)</li>
            <li>Code reviews and performance optimization</li>
            <li>Troubleshooting and mentorship for ongoing projects</li>
          </ul>
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="py-16 px-6 bg-gray-50 border-t border-gray-200">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-xl font-semibold mb-6">🌎 Why Work With Me</h3>
          <ul className="text-gray-700 text-left list-disc list-inside space-y-2">
            <li>100% remote support from India</li>
            <li>Flexible working hours for U.S./U.K./EU clients</li>
            <li>Focused on delivering clean, efficient, and maintainable code</li>
            <li>Strong communication and quick turnaround time</li>
          </ul>
        </div>
      </section>

      {/* ✅ Contact Card Section */}
      <section
        id="contact"
        className="py-20 px-6 bg-gradient-to-b from-gray-50 via-white to-gray-100 border-t border-gray-200"
      >
        <ContactCard />
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-sm text-gray-500 border-t">
        © {new Date().getFullYear()} Sachin Verma — all rights reserved.
      </footer>

      {/* ✅ Floating WhatsApp Icon (Bottom-Right Corner) */}
      <a
        href="https://wa.me/919459873319" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-3xl" />
      </a>
    </main>
  );
}
