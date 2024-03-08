import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import useRecentEventsHandle from "../../Hook/Admin/useRecentEventsHandle";
import useUpdateEventHandle from "../../Hook/Admin/useUpdateEventHandle";
import useRecentEventData from "../../Hook/common/useRecentEventData";

interface EventData {
  _id?: string;
  title: string;
  author: string;
  imageUrl: string;
}
export default function RecentEventsManagement() {
  const [formData, setFormData] = useState<EventData>({
    _id: "",
    title: "",
    author: "",
    imageUrl: "",
  });
  const queryClient = useQueryClient();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // fetch data from server using useQuery
  const { data, error, isLoading } = useRecentEventData();

  // add data to server using useMutation
  const { mutateAsync } = useRecentEventsHandle();

  // update data in server using useMutation
  const { mutateAsync: updateData } = useUpdateEventHandle();
  // delete data from server using useMutation
  const { mutateAsync: deleteData } = useMutation({
    mutationFn: (id) => {
      return fetch(`http://localhost:5000/events/${id}`, {
        method: "DELETE",
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["events"] });
    },
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to backend)
    if (formData._id && formData._id.length > 5) {
      updateData(formData);
      // Assuming you have the `_id` and updated data in an object called `formData`
    } else {
      mutateAsync({
        title: formData.title,
        author: formData.author,
        imageUrl: formData.imageUrl,
      });
    }
    setFormData({
      _id: "",
      title: "",
      author: "",
      imageUrl: "",
    });
  };

  console.log(data, error, isLoading, formData);
  return (
    <div className="px-8 py-6 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Recent Events Management Dashboard</h2>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-center">Add New Event</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700">
                Title:
              </label>
              <input type="text" id="title" name="title" value={formData.title} onChange={handleInputChange} required className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-indigo-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="author" className="block text-gray-700">
                Author:
              </label>
              <input type="text" id="author" name="author" value={formData.author} onChange={handleInputChange} required className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-indigo-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="imageUrl" className="block text-gray-700">
                Image URL:
              </label>
              <input type="url" id="imageUrl" name="imageUrl" value={formData.imageUrl} onChange={handleInputChange} required className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-indigo-500" />
            </div>
            <button type="submit" className="bg-indigo-500 text-white font-semibold py-2 px-4 rounded hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-500">
              Add Article
            </button>
          </form>
        </div>

        <div className="mb-8">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4 text-left">Title</th>
                <th className="py-2 px-4 text-left">Author</th>
                <th className="py-2 px-4 text-left">Image</th>
                <th className="py-2 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((event: EventData) => (
                <tr key={event._id} className="border-t border-gray-200">
                  <td className="py-2 px-4">{event.title}</td>
                  <td className="py-2 px-4">by {event.author}</td>
                  <td className="py-2 px-4">
                    <img src={event.imageUrl} alt="" className="w-16 h-16 object-cover rounded" />
                  </td>
                  <td className="py-2 px-4">
                    <button
                      onClick={() => {
                        setFormData(event);
                        console.log(formData);
                      }}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mr-2 focus:outline-none focus:ring focus:ring-blue-500"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        confirm("Are you sure you want to delete this event?") && deleteData(event._id);
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
    </div>
  );
}
