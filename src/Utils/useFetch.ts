import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        if (data) setData(data);
      } catch (err) {
        console.log(err);
      }
      fetchData();
    };
  }, [setData, url]);

  return [...data];
};

export default useFetch;
