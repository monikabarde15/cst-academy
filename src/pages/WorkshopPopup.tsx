import React, { useEffect, useState } from "react";

const WorkshopPopup = ({
  isOpen,
  onClose,
  title = "Workshop on 21st Feb. Seats are limited.",
  points = [
    "Live practical session",
    "Certificate after workshop",
    "Career guidance included",
    "Learn directly from experts",
  ],
}) => {

  // ================= RUNNING TIMER =================
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  useEffect(() => {
    if (!isOpen) return;

    const interval = setInterval(() => {
      setElapsedSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isOpen]);

  const hours = String(Math.floor(elapsedSeconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((elapsedSeconds % 3600) / 60)).padStart(2, "0");
  const seconds = String(elapsedSeconds % 60).padStart(2, "0");

  // ================= BODY SCROLL LOCK =================
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-md overflow-y-auto">

      {/* FLEX CENTER WRAPPER */}
      <div className="min-h-screen flex items-center justify-center p-4">

        <div className="relative w-full max-w-5xl 
        bg-gradient-to-br from-[#0b1220] to-[#111c34]
        rounded-2xl shadow-2xl border border-blue-500/20
        grid grid-cols-1 md:grid-cols-2 gap-8
        p-6 md:p-10">

          {/* CLOSE */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
          >
            ✕
          </button>

          {/* LEFT */}
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-400 mb-6">
              {title}
            </h2>

            {/* TIMER */}
            <div className="flex justify-center md:justify-start mb-8">
              <div className="bg-green-600 px-6 sm:px-10 py-4 sm:py-5 
              rounded-xl text-2xl sm:text-3xl md:text-4xl 
              font-bold tracking-widest text-white">
                {hours} : {minutes} : {seconds}
              </div>
            </div>

            <ul className="space-y-3 text-gray-300 text-sm sm:text-base">
              {points.map((point, index) => (
                <li key={index} className="flex gap-2">
                  <span className="text-blue-400">✔</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT FORM */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-6 text-white">
              Register Now
            </h3>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="First Name *"
                className="w-full bg-[#1a2438] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full bg-[#1a2438] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-[#1a2438] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email *"
                className="w-full bg-[#1a2438] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all">
                SUBMIT
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default WorkshopPopup;