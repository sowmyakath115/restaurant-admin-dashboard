import { useEffect, useState } from "react";

export default function useFetch(apiFn, params = {}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    apiFn(params)
      .then((res) => setData(res.data))
      .finally(() => setLoading(false));
  }, [JSON.stringify(params)]);

  return { data, loading, setData };
}
