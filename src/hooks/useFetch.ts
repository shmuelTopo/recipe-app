import { useState, useEffect } from "react";

interface FetchResponse<Data> {
  data: Data | null;
  isLoading: boolean;
  error: Error | null | unknown;
}

const useFetch = <Data>(url: string): FetchResponse<Data> => {
  const [data, setData] = useState<Data | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error as Error | null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
