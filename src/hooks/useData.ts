import { useEffect, useState } from 'react';

const apiEndpoint = 'http://localhost:9002';

export default (route: string) => {
  const [data, setData] = useState([]) as any[];
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
  }, [route, setData]);

  return {
    data,
    error,
    loading,
  };
};
