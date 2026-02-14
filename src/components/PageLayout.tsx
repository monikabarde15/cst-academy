import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

type PageLayoutProps = {
  children: React.ReactNode;
  showContact?: boolean; // Kept for backward combatibility but not used in new design yet
};

const PageLayout = ({ children }: PageLayoutProps) => {
  const location = useLocation();

  // Effect to scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen bg-background text-foreground w-full max-w-[100vw] relative selection:bg-infrared-red selection:text-white">
      <Navbar />
      <main>
        {children}
      </main>
      <div className="relative z-50">
        <Footer />
      </div>
    </div>
  );
};

export default PageLayout;
