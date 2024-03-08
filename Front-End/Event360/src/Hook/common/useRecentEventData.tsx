import { useQuery } from "@tanstack/react-query";

const useRecentEventData = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const response = await fetch("http://localhost:5000/events");
      return response.json();
    },
  });
  return { data, error, isLoading };
};
export default useRecentEventData;
