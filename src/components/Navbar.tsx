import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith('/#')) {
      const hash = href.replace('/', '');
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const elem = document.querySelector(hash);
          elem?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const elem = document.querySelector(hash);
        elem?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
    }
  };

  const navLinks = [
    { name: 'Services', href: '/#services' },
    { name: 'Case Studies', href: '/cases' },
    { name: 'News', href: '/blog' },
    { name: 'About', href: '/about' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 border-b ${isScrolled ? 'bg-wrlds-dark/95 backdrop-blur-xl border-white/5 py-4' : 'bg-wrlds-dark/95 backdrop-blur-xl border-transparent py-4 md:py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="relative z-50 flex items-center group">
            <img 
              src="/lovable-uploads/14ea3fe0-19d6-425c-b95b-4117bc41f3ca.png" 
              alt="WRLDS Logo" 
              className="h-8 md:h-10 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-bold tracking-wide text-white/70 hover:text-white transition-colors relative group uppercase font-space"
              >
                {link.name}
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-wrlds-blue rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </button>
            ))}
            <a
              href="#contact"
              className="px-8 py-3 bg-white text-black font-bold text-sm rounded-full hover:bg-wrlds-blue hover:text-white transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(0,102,204,0.5)]"
            >
              Start Project
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white relative z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Rendered outside nav, only when open */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 md:hidden"
          style={{ zIndex: 99999, backgroundColor: '#0a0a0f' }}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-6 text-white p-2"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={32} />
          </button>

          {/* Logo */}
          <div className="absolute top-4 left-6">
            <img 
              src="/lovable-uploads/14ea3fe0-19d6-425c-b95b-4117bc41f3ca.png" 
              alt="WRLDS Logo" 
              className="h-8 w-auto"
            />
          </div>

          {/* Menu content */}
          <div className="flex flex-col items-center justify-center h-full space-y-4 px-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-3xl font-bold font-space text-white hover:text-wrlds-blue transition-colors py-3 w-full text-center"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                const elem = document.querySelector('#contact');
                elem?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-8 px-10 py-4 bg-wrlds-blue text-white font-bold text-lg rounded-full"
            >
              Start Project
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
