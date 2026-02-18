
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FireCatProject from "./pages/FireCatProject";
import SportRetailProject from "./pages/SportRetailProject";
import WorkwearProject from "./pages/WorkwearProject";
import BetterHockeyProject from "./pages/BetterHockeyProject";
import BergProject from "./pages/BergProject";
import ReingaugeProject from "./pages/ReingaugeProject";
import TechDetails from "./pages/TechDetails";
import DevelopmentProcess from "./pages/DevelopmentProcess";
import About from "./pages/About";
import Careers from "./pages/Careers";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Blog from "./pages/Blog";
import BlogPostDetail from "./pages/BlogPostDetail";
import CoursePostDetail from "./pages/CoursePostDetail";
import Cases from "./pages/Cases";
import CyberSecurity from "./pages/CyberSecurity";
import EthicalHacking from "./pages/EthicalHacking";
import Cehv13 from "./pages/Cehv13";
import BugBounty from "./pages/BugBounty";
import AdvancedCyberSecurity from "./pages/AdvancedCyberSecurity";
import Preloader from "./components/Preloader";
import Cursor from "./components/Cursor";
import AdminLogin from "./pages/admin/LoginPage";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminProtectedRoute from "./components/AdminProtectedRoute";

const App = () => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Preloader />
      <Cursor />
      <div className="noise-overlay"></div>
      <TooltipProvider>
        <Toaster />
        <Sonner /> 
        <BrowserRouter> 
          <Routes> 
            <Route path="/" element={<Index />} />
            <Route path="/cases" element={<Cases />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route
                path="/admin/dashboard"
                element={
                  <AdminProtectedRoute>
                    <AdminDashboard />
                  </AdminProtectedRoute>
                }
              />

             <Route path="/projects/advanced-cyber-security" element={<AdvancedCyberSecurity />} />
            <Route path="/projects/bug-bounty" element={<BugBounty />} />
             <Route path="/projects/ethical-hacking" element={<EthicalHacking />} />
            <Route path="/projects/ceh-v13" element={<Cehv13 />} />
             <Route path="/projects/cyber-security" element={<CyberSecurity />} />
            <Route path="/projects/firecat" element={<FireCatProject />} />
            <Route path="/projects/sport-retail" element={<SportRetailProject />} />
            <Route path="/projects/workwear" element={<WorkwearProject />} />
            <Route path="/projects/better-hockey" element={<BetterHockeyProject />} />
            <Route path="/projects/berg" element={<BergProject />} />
            <Route path="/projects/reingauge" element={<ReingaugeProject />} />
            <Route path="/tech-details" element={<TechDetails />} />
            <Route path="/development-process" element={<DevelopmentProcess />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPostDetail />} />
            <Route path="/course-detail/:slug" element={<CoursePostDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
