// components/ContactCard.tsx
"use client";
import { useState } from "react";
import { Mail, Phone } from "lucide-react";

export default function ContactCard() {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg text-center border border-gray-100">
      <h2 className="text-lg font-semibold flex justify-center items-center gap-2 mb-2">
        💬 Get In Touch
      </h2>
      <p className="text-sm text-gray-600 mb-4">
        Interested in collaborating or need remote job support?  
        Let’s connect and build something amazing together!
      </p>

      {!showContact ? (
        <button
          onClick={() => setShowContact(true)}
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
        >
          Show Contact Info
        </button>
      ) : (
        <div className="space-y-3">
          <a
            href="mailto:sv.sachin319@gmail.com"
            className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
          >
            <Mail size={18} />
            sv.sachin319@gmail.com
          </a>

          <a
            href="https://wa.me/919459873319"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all"
          >
            <Phone size={18} />
            WhatsApp: +91 94598 73319
          </a>

          <button
            onClick={() => setShowContact(false)}
            className="text-xs text-gray-500 hover:underline mt-1"
          >
            Hide Contact Info
          </button>
        </div>
      )}

      <p className="text-xs text-gray-400 mt-4">
        Available for freelance projects, consulting, and mentoring.
      </p>
    </div>
  );
}
