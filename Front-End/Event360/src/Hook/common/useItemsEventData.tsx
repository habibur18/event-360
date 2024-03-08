import { useQuery } from "@tanstack/react-query";

const useItemsEventData = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["items"],
    queryFn: async () => {
      const response = await fetch("https://back-nz86sgw11-habibu-rahmans-projects.vercel.app/items");
      return response.json();
    },
  });
  return { data, error, isLoading };
};
export default useItemsEventData;
