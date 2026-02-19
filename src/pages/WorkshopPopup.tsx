import React, { useEffect, useState } from "react";
import axios from "axios";

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
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // ================= TIMER =================
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

  // ================= HANDLE CHANGE =================
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  // ================= VALIDATION =================
  const validate = () => {
    let newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email format";
    }

    if (formData.phone && !/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be 10 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ================= SUBMIT =================
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!validate()) return;

    try {
      setLoading(true);

      const res = await axios.post(
        "https://cst-acadmay-backend.onrender.com/api/workshop-register",
        formData
      );

      if (res.data.success) {
        setMessage("✅ Registration Successful!");

        // 🔥 Save flag so popup doesn't appear again
        localStorage.setItem("workshopRegistered", "true");

        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
        });

        setTimeout(() => {
          onClose();
        }, 2000);
      }
    } catch (error) {
      if (error.response?.data?.message) {
        setMessage("❌ " + error.response.data.message);
      } else {
        setMessage("❌ Something went wrong. Try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4">
      <div className="bg-[#0f172a] border border-blue-500/20 rounded-2xl shadow-2xl w-full max-w-5xl relative p-8 grid md:grid-cols-2 gap-10 text-white">

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

          {timeLeft && (
            <div className="flex gap-4 mb-6 flex-wrap">
              {["days", "hours", "minutes", "seconds"].map((unit) => (
                <div
                  key={unit}
                  className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl px-5 py-4 text-center min-w-[80px]"
                >
                  <div className="text-2xl font-bold">
                    {timeLeft[unit]}
                  </div>
                  <div className="text-xs uppercase opacity-80">
                    {unit}
                  </div>
                </div>
              ))}
            </div>
          )}

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
          <h3 className="text-xl font-semibold mb-6">
            Register Now
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">

            <div>
              <input
                type="text"
                name="firstName"
                placeholder="First Name *"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full bg-[#1e293b] border border-gray-700 rounded-lg px-4 py-3"
              />
              {errors.firstName && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.firstName}
                </p>
              )}
            </div>

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full bg-[#1e293b] border border-gray-700 rounded-lg px-4 py-3"
            />

            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-[#1e293b] border border-gray-700 rounded-lg px-4 py-3"
              />
              {errors.phone && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.phone}
                </p>
              )}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email *"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-[#1e293b] border border-gray-700 rounded-lg px-4 py-3"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            {message && (
              <p className="text-sm mt-2">{message}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all"
            >
              {loading ? "Submitting..." : "SUBMIT"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WorkshopPopup;
