import { Mail, Linkedin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const SimpleContact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-transparent relative z-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-wrlds-blue/20 text-wrlds-blue rounded-full text-xs font-semibold uppercase tracking-wider border border-wrlds-blue/30 mb-6"
          >
            Get in Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold font-space text-white mb-4 tracking-tight"
          >
            Let's Build <span className="text-wrlds-blue">Together</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg max-w-xl mx-auto"
          >
            Ready to create something extraordinary? Reach out and let's discuss your project.
          </motion.p>
        </div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-md mx-auto"
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 text-center">
            {/* Profile Image */}
            <div className="relative w-24 h-24 mx-auto mb-6">
              <img
                src="/lovable-uploads/a9bb9110-964a-43b0-a5ab-7162140cd133.png"
                alt="Love Anderberg"
                className="w-full h-full rounded-full object-cover border-2 border-wrlds-blue/50"
              />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-wrlds-dark"></div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-1 font-space">Love Anderberg</h3>
            <p className="text-white/50 mb-8">COO</p>

            {/* Contact Options */}
            <div className="space-y-4">
              <a
                href="mailto:love@wrlds.com"
                className="group flex items-center justify-center gap-3 w-full py-4 px-6 bg-wrlds-blue text-white font-bold rounded-full hover:bg-white hover:text-black transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                love@wrlds.com
                <ArrowRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
              </a>

              <a
                href="https://www.linkedin.com/in/love-anderberg-67549a174/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 w-full py-4 px-6 bg-white/10 text-white font-bold rounded-full hover:bg-white hover:text-black transition-all duration-300 border border-white/20"
              >
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
                <ArrowRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-10 w-72 h-72 bg-wrlds-blue/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-wrlds-blue/5 rounded-full blur-3xl pointer-events-none"></div>
      </div>
    </section>
  );
};

export default SimpleContact;
