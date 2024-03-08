import { useQuery } from "@tanstack/react-query";

const useOurServices = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const response = await fetch("http://localhost:5000/services");
      return response.json();
    },
  });
  return { data, error, isLoading };
};
export default useOurServices;
