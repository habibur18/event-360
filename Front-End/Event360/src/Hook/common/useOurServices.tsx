import { useQuery } from "@tanstack/react-query";

const useOurServices = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const response = await fetch("https://back-nz86sgw11-habibu-rahmans-projects.vercel.app/services");
      return response.json();
    },
  });
  return { data, error, isLoading };
};
export default useOurServices;
