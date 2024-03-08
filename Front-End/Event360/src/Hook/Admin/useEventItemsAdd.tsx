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
      await fetch("https://back-nz86sgw11-habibu-rahmans-projects.vercel.app/items", {
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
