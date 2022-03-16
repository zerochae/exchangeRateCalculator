import { useState, useEffect } from "react";

const useCalculate = (price: number, exchange: number) => {
  const [data, setData] = useState<string>("");
  // const isNumber = /[0-9]/;

  useEffect(() => {
    const calculateData = (price: number, exchange: number) => {
      setData(
        (price * exchange)
          .toFixed(2)
          .toString()
          .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
      );
    };
    // isNumber.test(String(price) + String(exchange)) &&
    calculateData(price, exchange);
  });

  return data;
};

export default useCalculate;
