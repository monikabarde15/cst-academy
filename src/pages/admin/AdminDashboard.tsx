import React from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  return (
    <div className="relative min-h-screen bg-[#050816] text-white overflow-hidden">

      {/* Radial Glow Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/20 blur-[180px] rounded-full"></div>

      <div className="relative z-10 flex min-h-screen">

        {/* Sidebar */}
        <div className="w-64 bg-white/5 backdrop-blur-xl border-r border-white/10 p-8 hidden md:block">
          <h2 className="text-2xl font-bold mb-12">
           <img
               src="/logo/cst-academy-logo.png"
               alt="WRLDS Technologies Logo"
               className=
                 "h-14 md:h-16 w-auto object-contain transition-all duration-300 mt-10 rounded-xl overflow-hidden mt-10 bg-white"
             />
          </h2>

          <ul className="space-y-6 text-gray-400 text-sm">
            <li className="hover:text-blue-400 transition cursor-pointer">
              Dashboard
            </li>
            <li className="hover:text-blue-400 transition cursor-pointer">
              Users
            </li>
            <li className="hover:text-blue-400 transition cursor-pointer">
              Courses
            </li>
            <li className="hover:text-blue-400 transition cursor-pointer">
              Settings
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 px-16 py-14">

          {/* Header */}
          <div className="flex justify-between items-center mb-16">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-white to-blue-500 bg-clip-text text-transparent">
              Welcome Admin 👋
            </h1>

            <button
              onClick={handleLogout}
              className="px-6 py-2 rounded-xl bg-gradient-to-r from-red-500 to-red-600 hover:opacity-90 transition font-medium"
            >
              Logout
            </button>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-12">

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/10 blur-xl rounded-3xl opacity-0 group-hover:opacity-100 transition"></div>
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:border-blue-500 transition">
                <p className="text-gray-400 mb-3">Total Users</p>
                <h2 className="text-5xl font-bold text-blue-500">120</h2>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-green-600/10 blur-xl rounded-3xl opacity-0 group-hover:opacity-100 transition"></div>
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:border-green-500 transition">
                <p className="text-gray-400 mb-3">Total Courses</p>
                <h2 className="text-5xl font-bold text-green-400">15</h2>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-purple-600/10 blur-xl rounded-3xl opacity-0 group-hover:opacity-100 transition"></div>
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:border-purple-500 transition">
                <p className="text-gray-400 mb-3">Active Subscriptions</p>
                <h2 className="text-5xl font-bold text-purple-400">80</h2>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
