import React, { useEffect, useState } from "react";
import { getAllServices, deleteService } from "../../pages/admin/api/serviceApi";
import ServiceForm from "./ServiceForm";
import { toast } from "sonner";
import { Trash2, Pencil } from "lucide-react";

const AdminServices = () => {
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [editData, setEditData] = useState(null);

  const itemsPerPage = 5;

  const fetchServices = async () => {
    const res = await getAllServices();
    setServices(res.data.data);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      await deleteService(id);
      toast.success("Service deleted successfully");
      fetchServices();
    }
  };

  const handleEdit = (item) => {
    setEditData(item);
    setShowModal(true);
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const filteredServices = services.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = filteredServices.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredServices.length / itemsPerPage);

  return (
    <div className="p-4 md:p-6">

      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center mb-6">
        <h2 className="text-xl md:text-2xl font-bold">Services</h2>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search..."
            className="border p-2 rounded-lg w-full md:w-60"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button
            onClick={() => {
              setEditData(null);
              setShowModal(true);
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 w-full sm:w-auto"
          >
            + Add Service
          </button>
        </div>
      </div>

      {/* ================= DESKTOP TABLE ================= */}
      <div className="hidden md:block bg-white rounded-xl shadow overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-100 text-sm uppercase">
            <tr>
              <th className="p-4 text-left">Image</th>
              <th className="p-4 text-left">Title</th>
              <th className="p-4 text-left">Type</th>
              <th className="p-4 text-left">Slug</th>
              <th className="p-4 text-left">Category</th>
              <th className="p-4 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {currentItems.map((item) => (
              <tr key={item._id} className="border-t hover:bg-gray-50">
                <td className="p-4">
                  <img
                    src={item.imageUrl || "https://via.placeholder.com/60"}
                    alt={item.title}
                    className="w-14 h-14 object-cover rounded-lg border"
                  />
                </td>
                <td className="p-4 font-medium">{item.title}</td>
                <td className="p-4 capitalize text-blue-600">{item.type}</td>
                <td className="p-4 text-gray-500">{item.slug}</td>
                <td className="p-4 text-gray-500">{item.category}</td>
                <td className="p-4">
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(item)}
                      className="bg-yellow-400 hover:bg-yellow-500 text-white p-2 rounded"
                    >
                      <Pencil size={14} />
                    </button>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="bg-red-500 hover:bg-red-600 text-white p-2 rounded"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ================= MOBILE CARDS ================= */}
    {/* ================= MOBILE CARDS ================= */}
<div className="md:hidden space-y-4">
  {currentItems.map((item) => (
    <div key={item._id} className="bg-white rounded-xl shadow p-4">

      {/* Top Section */}
      <div className="flex gap-3">

        <img
          src={item.imageUrl || "https://via.placeholder.com/60"}
          alt={item.title}
          className="w-20 h-20 object-cover rounded-lg border flex-shrink-0"
        />

        <div className="flex flex-col flex-1 min-w-0">

          {/* TITLE FIX */}
          <h3 className="font-semibold text-sm break-words">
            {item.title}
          </h3>

          <p className="text-xs text-blue-600 capitalize mt-1">
            {item.type}
          </p>

          <p className="text-xs text-gray-500 mt-1 break-all">
            {item.slug}
          </p>

          <p className="text-xs text-gray-500">
            {item.category}
          </p>

        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-2 mt-4">
        <button
          onClick={() => handleEdit(item)}
          className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-white py-2 rounded-lg text-sm"
        >
          Edit
        </button>

        <button
          onClick={() => handleDelete(item._id)}
          className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg text-sm"
        >
          Delete
        </button>
      </div>

    </div>
  ))}
</div>

      {/* ================= PAGINATION ================= */}
      {totalPages > 1 && (
        <div className="flex flex-wrap justify-center mt-6 gap-2">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-3 py-1 rounded text-sm ${
                currentPage === index + 1
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}

      {/* ================= MODAL ================= */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 p-4">
          <div className="bg-white w-full max-w-3xl p-4 md:p-6 rounded-xl shadow-xl overflow-y-auto max-h-[90vh]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg md:text-xl font-semibold">
                {editData ? "Edit Service" : "Add Service"}
              </h3>

              <button
                onClick={() => setShowModal(false)}
                className="text-gray-600 text-xl"
              >
                ✖
              </button>
            </div>

            <ServiceForm
              existingData={editData}
              onSuccess={() => {
                fetchServices();
                setShowModal(false);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminServices;