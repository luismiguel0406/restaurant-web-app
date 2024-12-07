import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const usePostMutation = (url) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const mutation = useMutation({
    mutationFn: (body) =>
      fetch(`${apiUrl}/api/${url}`, {
        method: "POST",
        body: JSON.stringify(body, null, 2),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }),
    onError: (err) => {
      return toast.error(err);
    }
  });

  return mutation;
};
