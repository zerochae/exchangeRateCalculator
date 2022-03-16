import * as T from "Types/index";

import { useState, useEffect } from "react";

const useSetData = (
  fetchData: T.ExchangeData,
  keys: string[],
  obj: T.Selects
) => {
  const [data, setData] = useState<T.Selects | null>(null);

  useEffect(() => {
    const setFetchData = () => {
      if (fetchData) {
        const newData = Object.keys(fetchData).reduce(
          (result, key) => {
            if (keys.includes(key))
              result[key.slice(3, 5)].price = fetchData[key];
            return result;
          },
          { ...obj }
        );

        if (newData) setData(newData);
      }
    };
    data === null && setFetchData();
  }, [data, setData, keys, fetchData, obj]);

  return data;
};

export default useSetData;
