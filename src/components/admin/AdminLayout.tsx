import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  Users,
  Settings,
  Menu,
  Sun,
  Moon,
  Mail
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [collapsed, setCollapsed] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const dropdownRef = useRef(null);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/login");
  };

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const menuItem = (path, label, Icon) => {
    const active = location.pathname === path;

    return (
      <div
        onClick={() => {
          navigate(path);
          setSidebarOpen(false);
        }}
        className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all
        ${
          active
            ? "bg-[#F97316] text-white"
            : "text-gray-300 hover:bg-[#1E3A8A] hover:text-white"
        }`}
      >
        <Icon size={18} />
        {!collapsed && <span className="text-sm">{label}</span>}
      </div>
    );
  };

  return (
    <div className={`${darkMode ? "bg-[#0B1C3D] text-white" : "bg-[#F4F7FB] text-gray-900"} flex min-h-screen`}>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
     <aside
  className={`${
    collapsed ? "w-20" : "w-64"
  } bg-[#0B1C3D] flex-shrink-0
  transition-all duration-300
  fixed lg:relative top-0 left-0 h-screen z-50
  transform transition-transform duration-300
  ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
  lg:translate-x-0`}
>
        <div className="flex flex-col h-full p-6 relative">

          {/* Collapse */}
         <div className="flex items-center justify-between mb-6">

    {/* Collapse button (Desktop only) */}
    <button
      onClick={() => setCollapsed(!collapsed)}
      className="hidden lg:block text-gray-400 hover:text-white"
    >
      {collapsed ? "»" : "«"}
    </button>

    {/* Close button (Mobile + Tablet only) */}
    <button
      onClick={() => setSidebarOpen(false)}
      className="lg:hidden text-gray-400 hover:text-white text-xl"
    >
      ✕
    </button>
  </div>

          {/* Logo */}
          <div className="mb-10 flex justify-center">
            <img
              src="/logo/cst-academy-logo.png"
              alt="Logo"
              className="h-10 bg-white p-1 rounded"
            />
          </div>

          {/* Menu */}
          <div className="space-y-2">
            {menuItem("/admin/dashboard", "Dashboard", LayoutDashboard)}
            {menuItem("/admin/workshop", "Workshop", BookOpen)}
            {menuItem("/admin/contacts", "Contacts", Mail)}
             {menuItem("/admin/services", "Services", Users)}
              {/* {menuItem("/admin/users", "Users", Users)} */}
            {menuItem("/admin/settings", "Settings", Settings)}
          </div>

          <div className="mt-auto text-xs text-gray-400 text-center">
            © 2026 CST Academy
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col">

        {/* Header */}
        <header className={`${darkMode ? "bg-[#112B5A]" : "bg-white"} px-8 py-4 flex items-center justify-between border-b ${darkMode ? "border-[#1E3A8A]" : "border-gray-200"}`}>

          <div className="flex items-center gap-4">
            <button className="lg:hidden" onClick={() => setSidebarOpen(true)}>
              <Menu />
            </button>

            <div className="text-sm text-gray-500">
              Admin /
              <span className="ml-1 font-medium text-[#F97316] capitalize">
                {location.pathname.split("/")[2] || "dashboard"}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6">

            <button onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <div className="relative" ref={dropdownRef}>
              <div
                onClick={() => setProfileOpen(!profileOpen)}
                className="w-9 h-9 bg-[#F97316] rounded-full flex items-center justify-center text-white cursor-pointer"
              >
                A
              </div>

              {profileOpen && (
                <div className={`${darkMode ? "bg-[#112B5A] text-white border-[#1E3A8A]" : "bg-white text-gray-800 border-gray-200"} absolute right-0 mt-3 w-48 shadow-lg rounded-lg border overflow-hidden`}>
                  <div
                    onClick={() => navigate("/admin/profile")}
                    className="px-4 py-3 text-sm hover:bg-[#1E3A8A] hover:text-white cursor-pointer"
                  >
                    Edit Profile
                  </div>
                  <div
                    onClick={() => navigate("/admin/change-password")}
                    className="px-4 py-3 text-sm hover:bg-[#1E3A8A] hover:text-white cursor-pointer"
                  >
                    Change Password
                  </div>
                  <div
                    onClick={handleLogout}
                    className="px-4 py-3 text-sm text-red-500 hover:bg-[#1E3A8A] hover:text-white cursor-pointer"
                  >
                    Logout
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-8">

          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>

        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
