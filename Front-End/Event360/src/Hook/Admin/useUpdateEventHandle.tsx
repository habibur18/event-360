import { useMutation, useQueryClient } from "@tanstack/react-query";

interface EventData {
  _id: string;
  title: string;
  author: string;
  imageUrl: string;
}

export default function useUpdateEventHandle() {
  const queryClient = useQueryClient();

  const { mutateAsync, isError, isSuccess } = useMutation<EventData, unknown, EventData>(
    async (data: EventData) => {
      return await fetch(`https://back-nz86sgw11-habibu-rahmans-projects.vercel.app/events/${data._id}`, {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["events"] });
      },
    }
  );

  return { mutateAsync, isError, isSuccess };
}
