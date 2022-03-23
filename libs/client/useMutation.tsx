import { useState } from "react";

interface UseMutationState<T> {
  loading: boolean;
  errors?: object;
  data?: T;
}
type UseMutationResult<T> = [(data: any) => void, UseMutationState<T>];

export default function useMutation<T = any>(
  url: string
): UseMutationResult<T> {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<undefined | any>(undefined);
  const [data, setData] = useState<undefined | any>(undefined);
  async function mutate(data: any) {
    setLoading(true);
    try {
      const response = await (
        await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
      ).json();
      setData(response);
    } catch (e) {
      console.error(e);
      setErrors(e);
    }
    setLoading(false);
  }
  return [mutate, { loading, errors, data }];
}
