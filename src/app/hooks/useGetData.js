import { useQuery } from "@tanstack/react-query";

export const useGetData = (url) => {
  const urlSplit = url.split("/");
  const key = urlSplit[1];

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const query = useQuery({
    queryKey: [key],
    queryFn: () => fetch(`${apiUrl}/api/${url}`).then((res) => res.json()),
  });

  return query;
};
