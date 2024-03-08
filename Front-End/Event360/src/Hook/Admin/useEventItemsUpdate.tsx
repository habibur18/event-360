import { useMutation, useQueryClient } from "@tanstack/react-query";

interface EventData {
  _id?: string;
  title: string;
  image: string;
}
export default function useEventItemsUpdate() {
  const queryClient = useQueryClient();
  const { mutateAsync, isError, isSuccess } = useMutation<void, Error, EventData>( // Provide type annotations here
    async (data: EventData) => {
      return await fetch(`http://localhost:5000/items/${data._id}`, {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["items"] });
      },
    }
  );
  return { mutateAsync, isError, isSuccess };
}
