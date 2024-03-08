import { useMutation, useQueryClient } from "@tanstack/react-query";

interface EventData {
  _id?: string;
  title: string;
  author: string;
  imageUrl: string;
}

interface MutateEventData {
  (data: EventData): Promise<void>;
}

export const useRecentEventsHandle = (): {
  mutateAsync: MutateEventData;
  isError: boolean;
  isSuccess: boolean;
} => {
  const queryClient = useQueryClient();
  const { mutateAsync, isError, isSuccess } = useMutation<MutateEventData, Error, EventData, unknown>(
    async (data: EventData) => {
      const response = await fetch("https://back-nz86sgw11-habibu-rahmans-projects.vercel.app/events", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      return response.json(); // Assuming the server returns JSON data
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["events"] });
      },
    }
  );

  return { mutateAsync, isError, isSuccess };
};
export default useRecentEventsHandle;
