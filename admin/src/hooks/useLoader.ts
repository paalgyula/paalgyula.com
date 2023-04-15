import { useState } from 'react';

interface LoaderProps<T> {
  isLoading: boolean;
  load: (prom: Promise<T>) => Promise<T>;
  data: T | null;
  error?: any;
}

/**
 * converts promise to a loder object contains isLoading,
 * the retreived data, and error if any
 * @return {LoaderProps<T>}
 */
export function useLoader<T>(): LoaderProps<T> {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<any>();

  const load = (prom: Promise<T>) =>
    prom
      .then((data) => {
        setData(data);
        return data;
      })
      .then((data) => {
        setLoading(false);
        return data;
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
        throw err;
      });

  return {
    data,
    isLoading,
    load,
    error
  };
}
