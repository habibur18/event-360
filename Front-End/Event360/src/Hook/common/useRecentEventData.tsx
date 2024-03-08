import { useQuery } from "@tanstack/react-query";

const useRecentEventData = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const response = await fetch("https://back-nz86sgw11-habibu-rahmans-projects.vercel.app/events");
      return response.json();
    },
  });
  return { data, error, isLoading };
};
export default useRecentEventData;
