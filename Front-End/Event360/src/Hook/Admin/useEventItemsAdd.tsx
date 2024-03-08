import { useMutation, useQueryClient } from "@tanstack/react-query";

interface EventData {
  _id?: string;
  title: string;
  image: string;
}

export default function useEventItemsAdd() {
  const queryClient = useQueryClient();

  const { mutateAsync, isError, isSuccess } = useMutation<void, Error, EventData>(
    async (data: EventData) => {
      await fetch("http://localhost:5000/items", {
        method: "POST",
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
