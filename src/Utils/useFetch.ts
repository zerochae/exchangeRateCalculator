import { useEffect, useState } from "react";
import * as T from "Types/index";

const useFetch = (url: string) => {
  const [data, setData] = useState<T.ExchangeData>(null);

  useEffect(() => {
    const fetchData = async (url: string) => {
      try {
        const res = await (await fetch(url)).json();
        if (res) setData(res.quotes);
      } catch (err) {
        console.log(err);
      }
      console.log("fetch");
    };
    data === null && fetchData(url);
  }, [data, setData, url]);

  return data;
};

export default useFetch;
