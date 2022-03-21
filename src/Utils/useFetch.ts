import * as T from "Types/index";

import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState<T.ExchangeData>(null);

  useEffect(() => {
    const fetchData = async (url: string) => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(res);
        console.log(data);
        if (data) setData(data.quotes);
      } catch (err) {
        console.log(err);
      }
    };
    data === null && fetchData(url);
  }, [data, setData, url]);

  return data;
};

export default useFetch;
