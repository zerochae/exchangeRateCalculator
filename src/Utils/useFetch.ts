import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async (url: string) => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        if (data) setData(data.quotes);
      } catch (err) {
        console.log(err);
      }
    };
    data === null && fetchData(url);
  }, [setData, url]);

  return data;
};

export default useFetch;
