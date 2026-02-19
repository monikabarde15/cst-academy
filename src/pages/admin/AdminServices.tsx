import React, { useEffect, useState } from "react";
import { getAllServices, deleteService } from "../../pages/admin/api/serviceApi";
import ServiceForm from "./ServiceForm";
import { toast } from "sonner";

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
    <div className="p-6">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-3">
        <h2 className="text-2xl font-bold">Services</h2>

        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Search..."
            className="border p-2 rounded-lg w-60"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button
            onClick={() => {
              setEditData(null);
              setShowModal(true);
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            + Add Service
          </button>
        </div>
      </div>

      {/* Table */}
      {/* Table */}
<div className="bg-white rounded-xl shadow overflow-hidden">
  <table className="min-w-full">
    <thead className="bg-gray-100 text-sm uppercase">
      <tr>
        <th className="p-4 text-left">Image</th>
        <th className="p-4 text-left">Title</th>
        <th className="p-4 text-left">Type</th>
        <th className="p-4 text-left">Slug</th>
        <th className="p-4 text-left">category</th>
        <th className="p-4 text-left">Action</th>
      </tr>
    </thead>

    <tbody>
      {currentItems.map((item) => (
        <tr key={item._id} className="border-t hover:bg-gray-50">
          
          {/* IMAGE */}
          <td className="p-4">
            <img
              src={item.imageUrl || "https://via.placeholder.com/60"}
              alt={item.title}
              className="w-14 h-14 object-cover rounded-lg border"
            />
          </td>

          {/* TITLE */}
          <td className="p-4 font-medium">{item.title}</td>

          {/* TYPE */}
          <td className="p-4 capitalize text-blue-600 font-medium">
            {item.type}
          </td>

          {/* SLUG */}
          <td className="p-4 text-gray-500">{item.slug}</td>
          <td className="p-4 text-gray-500">{item.category}</td>

          {/* ACTION */}
          <td className="p-4 space-x-2">
            <button
              onClick={() => handleEdit(item)}
              className="bg-yellow-400 text-white px-3 py-1 rounded"
            >
              Edit
            </button>

            <button
              onClick={() => handleDelete(item._id)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </td>
        </tr>
      ))}

      {currentItems.length === 0 && (
        <tr>
          <td colSpan="5" className="text-center p-6 text-gray-500">
            No Services Found
          </td>
        </tr>
      )}
    </tbody>
  </table>
</div>


      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 gap-2">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-3 py-1 rounded ${
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

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-3xl p-6 rounded-xl shadow-xl overflow-y-auto max-h-[90vh]">

            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">
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
