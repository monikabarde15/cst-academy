import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Jan", users: 40 },
  { name: "Feb", users: 65 },
  { name: "Mar", users: 80 },
  { name: "Apr", users: 120 },
  { name: "May", users: 150 },
];

const AdminDashboard = () => {
  return (
    <div className="space-y-10">

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-500 text-sm">Total Users</p>
          <h2 className="text-3xl font-bold text-[#1E3A8A] mt-2">120</h2>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-500 text-sm">Workshop Registrations</p>
          <h2 className="text-3xl font-bold text-orange-500 mt-2">80</h2>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-500 text-sm">Active Courses</p>
          <h2 className="text-3xl font-bold text-green-500 mt-2">15</h2>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-lg font-semibold mb-4">
          Monthly User Growth
        </h3>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="users"
              stroke="#1E3A8A"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};

export default AdminDashboard;
