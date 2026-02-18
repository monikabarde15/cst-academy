import { Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#07131d] text-white pt-20 pb-10">
      <div className="container mx-auto px-6">

        {/* Top Grid Section */}
        <div className="grid md:grid-cols-4 gap-12 border-b border-white/10 pb-16">

          {/* Company Info */}
          <div>
            <div className="mb-6">
  <Link to="/">
   <img
  src="/logo/cst-academy-logo.png"
  alt="Codesec Technologies"
  className="h-14 w-auto object-contain brightness-0 invert"
/>

  </Link>
</div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Codesec Technologies delivers top-notch Penetration Testing
              (Ethical Hacking) and Cybersecurity services at pocket-friendly
              prices. Our experts safeguard your business against modern
              cyber threats, ensuring your IT infrastructure stays secure,
              compliant, and resilient.
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full hover:bg-blue-600 transition"
              >
                <Instagram size={18} />
              </a>

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full hover:bg-blue-600 transition"
              >
                <Linkedin size={18} />
              </a>
            </div>

          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Useful Links</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="/about" className="hover:text-white transition">About Us</a></li>
              <li><a href="/services" className="hover:text-white transition">Services</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>Vulnerability Assessment & Penetration Testing</li>
              <li>Cybersecurity Consultation & Risk Management</li>
              <li>Web Application Security Testing</li>
              <li>Secure Web & App Development</li>
              <li>Network Security Audits</li>
              <li>Security Training & Awareness Programs</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <p className="text-gray-400 text-sm mb-4">
              Indore, <br />
              Madhya Pradesh, <br />
              India
            </p>

            <p className="text-gray-400 text-sm mb-2">
              <span className="font-semibold text-white">Phone:</span> +91 9098934112
            </p>

            <p className="text-gray-400 text-sm">
              <span className="font-semibold text-white">Email:</span> codesectechnologies@gmail.com
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Codesec Technologies. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
