"use client"

import { Linkedin, Twitter, Mail, MapPin } from "lucide-react"

const footerLinks = {
  services: [
    "AI Strategy & Consulting",
    "Training & Enablement",
    "AI Chatbots",
    "Process Automation",
    "Custom Development",
  ],
  company: [
    "About Us",
    "Case Studies",
    "Blog & Resources",
    "Contact",
  ],
  legal: [
    "Privacy Policy",
    "Terms of Service",
    "Cookie Policy",
  ],
}

export function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="mb-4">
              <h3 className="font-montserrat font-black text-2xl">ONE GO</h3>
              <p className="text-xs text-white/60 tracking-wider">AI AGENCY</p>
            </div>
            <p className="text-white/70 mb-6 text-sm leading-relaxed">
              AI Solutions for Modern Businesses
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:hello@onegoai.com"
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  hello@onegoai.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/70 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Málaga, Spain 🇪🇸</span>
              </li>
            </ul>
            <div className="mt-6">
              <h5 className="font-semibold text-sm mb-2">Legal</h5>
              <ul className="space-y-2">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-white/60 hover:text-white transition-colors text-xs"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>© 2024 ONE GO AI Agency. All rights reserved.</p>
            <p>Made with ❤️ in Spain</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
