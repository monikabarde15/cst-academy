const Footer = () => {
  return (
    <footer className="bg-wrlds-dark border-t border-white/10 py-20">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold font-space text-white mb-6">
              LET'S BUILD <br /> THE IMPOSSIBLE.
            </h2>
            <p className="text-wrlds-muted max-w-md">
              Ready to take your connected product from napkin sketch to global distribution?
            </p>
          </div>
          <div className="mt-10 md:mt-0 flex flex-col items-start md:items-end gap-4">
            <a href="mailto:hello@wrlds.com" className="text-2xl hover:text-wrlds-blue transition-colors font-space font-bold">hello@wrlds.com</a>
            <p className="text-wrlds-muted text-sm">Hornsgatan 110, 117 26 Stockholm, Sweden</p>
            <div className="flex gap-6">
              <a href="https://www.linkedin.com/company/wrldstechnologies/" target="_blank" rel="noopener noreferrer" className="text-wrlds-muted hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between text-sm text-neutral-500">
          <p>&copy; {new Date().getFullYear()} WRLDS Creations. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
