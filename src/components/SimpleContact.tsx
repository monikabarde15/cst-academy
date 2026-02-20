import { useState } from "react";
import { Mail, Linkedin, ArrowRight, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import axios from "axios";

const SimpleContact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!formData.firstName || !formData.email || !formData.message) {
      setError("Please fill all required fields");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "https://cst-acadmay-backend.onrender.com/api/contact",
        formData
      );

      if (res.data.success) {
        setSuccess(true);
        setFormData({
          firstName: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      }
    } catch (err) {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative z-20">
      <div className="container mx-auto px-6">

        {/* Header */}
       <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Let's Build{" "}
            <span className="text-wrlds-blue">
              Your Cybersecurity Future
            </span>
          </motion.h2>

          <p className="text-white/60 text-sm max-w-xl mx-auto">
            Whether you are starting your journey, upgrading your skills, or securing
            your organization — CST Academy is your trusted cybersecurity training
            partner.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a
              href="#services"
              className="group px-8 py-3 bg-wrlds-blue text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2"
            >
              Enroll Now
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#contact"
              className="px-8 py-3 border border-white/30 text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              Contact Admissions
            </a>
          </div>
        </div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -5 }}
          className="max-w-lg mx-auto"
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name */}
              <input
                type="text"
                name="firstName"
                placeholder="Full Name *"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-wrlds-blue focus:ring-2 focus:ring-wrlds-blue/30"
              />

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-wrlds-blue focus:ring-2 focus:ring-wrlds-blue/30"
              />

              {/* Phone */}
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-wrlds-blue focus:ring-2 focus:ring-wrlds-blue/30"
              />
             

              {/* Message */}
              <textarea
                rows="4"
                name="message"
                placeholder="Your Message *"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-wrlds-blue resize-none"
              ></textarea>

              {/* Error */}
              {error && (
                <p className="text-red-400 text-sm">{error}</p>
              )}

              {/* Success */}
              {success && (
                <p className="text-green-400 text-sm">
                  ✅ Message sent successfully!
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="group flex items-center justify-center gap-3 w-full py-4 bg-wrlds-blue text-white font-bold rounded-full hover:bg-white hover:text-black transition-all disabled:opacity-70"
              >
                {loading ? (
                  <Loader2 className="animate-spin w-5 h-5" />
                ) : (
                  <>
                    Send Message
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  </>
                )}
              </button>
            </form>

            {/* Contact Info */}
            <div className="mt-10 border-t border-white/10 pt-6 text-center space-y-3">
              <a
                href="mailto:info@cstacademy.com"
                className="flex justify-center items-center gap-2 text-white/70 hover:text-white"
              >
                <Mail className="w-4 h-4" />
                info@cstacademy.com
              </a>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center gap-2 text-white/70 hover:text-white"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SimpleContact;
