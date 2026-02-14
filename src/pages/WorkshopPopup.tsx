import React, { useEffect, useState } from "react";

const WorkshopPopup = ({
  isOpen,
  onClose,
  title = "Workshop on 21st Feb. Seats are limited.",
  targetDate = "2026-02-21T18:00:00",
  points = [
    "Live practical session",
    "Certificate after workshop",
    "Career guidance included",
    "Learn directly from experts",
  ],
}) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isOpen) return null;

  return (
  <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4">
    
    <div className="bg-[#0f172a] border border-blue-500/20 rounded-2xl shadow-2xl w-full max-w-5xl relative p-8 grid md:grid-cols-2 gap-10 text-white">

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
      >
        ✕
      </button>

      {/* LEFT SIDE */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-400">
          {title}
        </h2>

        {/* TIMER */}
        {timeLeft && (
          <div className="flex gap-4 mb-6 flex-wrap">
            {["days", "hours", "minutes", "seconds"].map((unit) => (
              <div
                key={unit}
                className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-xl px-5 py-4 text-center min-w-[80px] shadow-lg"
              >
                <div className="text-2xl font-bold">
                  {timeLeft[unit]}
                </div>
                <div className="text-xs uppercase tracking-wide opacity-80">
                  {unit}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* POINTS */}
        <ul className="space-y-3">
          {points.map((point, index) => (
            <li key={index} className="flex items-center gap-2 text-gray-300">
              <span className="text-blue-400">✔</span> {point}
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT SIDE FORM */}
      <div>
        <h3 className="text-xl font-semibold mb-6 text-white">
          Register Now
        </h3>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-full bg-[#1e293b] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
          />

          <input
            type="text"
            placeholder="Last Name"
            className="w-full bg-[#1e293b] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full bg-[#1e293b] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full bg-[#1e293b] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
          />

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all shadow-lg"
          >
            SUBMIT
          </button>
        </form>
      </div>

    </div>
  </div>
);

};

export default WorkshopPopup;
