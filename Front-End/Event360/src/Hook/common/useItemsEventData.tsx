import { useQuery } from "@tanstack/react-query";

const useItemsEventData = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["items"],
    queryFn: async () => {
      const response = await fetch("http://localhost:5000/items");
      return response.json();
    },
  });
  return { data, error, isLoading };
};
export default useItemsEventData;
