import { useState } from "react";

interface UseMutationState {
  loading: boolean;
  errors?: object;
  data?: object;
}
type UseMutationResult = [(data: any) => void, UseMutationState];

export default function useMutation(url: string): UseMutationResult {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<undefined | any>(undefined);
  const [data, setData] = useState<undefined | any>(undefined);
  async function mutate(data: string) {
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
      setErrors(e);
    }
    setLoading(false);
  }
  return [mutate, { loading, errors, data }];
}
