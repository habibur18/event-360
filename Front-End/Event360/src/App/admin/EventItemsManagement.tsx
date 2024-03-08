import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import useEventItemsAdd from "../../Hook/Admin/useEventItemsAdd";
import useEventItemsUpdate from "../../Hook/Admin/useEventItemsUpdate";
import useItemsEventData from "../../Hook/common/useItemsEventData";
interface EventData {
  _id?: string;
  title: string;
  image: string;
}
export default function EventItemsManagement() {
  const [formData, setFormData] = useState<EventData>({
    _id: "",
    title: "",
    image: "",
  });
  const queryClient = useQueryClient();

  // fetch data
  const { data } = useItemsEventData();
  // add data
  const { mutateAsync } = useEventItemsAdd();
  // update data
  const { mutateAsync: updateData } = useEventItemsUpdate();

  // delete data
  const { mutateAsync: deleteData } = useMutation({
    mutationFn: (id: string) => {
      return fetch(`http://localhost:5000/items/${id}`, {
        method: "DELETE",
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["items"] });
    },
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  async function handleDeleteItemClick(itemId: string) {
    if (confirm("Are you sure you want to delete this item?")) {
      await deleteData(itemId);
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to backend)
    console.log(formData);
    if (formData._id && formData._id.length > 5) {
      updateData(formData);
    } else {
      mutateAsync(formData);
    }
    // Reset form fields
    setFormData({
      _id: "",
      title: "",
      image: "",
    });
  };

  return (
    <div className="px-8 py-6 bg-gray-100">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Event Items</h2>
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700">
              Title:
            </label>
            <input type="text" id="title" name="title" value={formData.title} onChange={handleInputChange} required className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-indigo-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-700">
              Image URL:
            </label>
            <input type="url" id="image" name="image" value={formData.image} onChange={handleInputChange} required className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-indigo-500" />
          </div>
          <button type="submit" className="bg-indigo-500 text-white font-semibold py-2 px-4 rounded hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-500">
            Submit
          </button>
        </form>

        <table className="w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 text-left">Title</th>
              <th className="py-2 px-4 text-left">Image</th>
              <th className="py-2 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item: EventData) => (
              <tr key={item._id} className="border-t border-gray-200">
                <td className="py-2 px-4">{item.title}</td>
                <td className="py-2 px-4">
                  <img src={item.image} alt="" className="w-16 h-16 object-cover rounded" />
                </td>
                <td className="py-2 px-4 space-x-2">
                  <button onClick={() => setFormData(item)} className="bg-sky-500 hover:bg-sky-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-red-500">
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      if (item._id !== undefined) {
                        handleDeleteItemClick(item._id);
                      }
                    }}
                    className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-red-500"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
