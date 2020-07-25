import { useEffect, useState, useMemo } from 'react';

const apiEndpoint = 'http://localhost:9002';

export default (route: string) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window
      .fetch(`${apiEndpoint}/${route}`)
      .then(async (r: Response) => {
        setData(await r.json());
        setLoading(false);
      })
      .catch(setError);
  }, [route]);

  return {
    data,
    error,
    loading,
  };
};
