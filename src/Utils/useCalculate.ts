import { useState, useEffect } from "react";

const useCalculate = (price: number, receiver: number, sender: number) => {
  const [data, setData] = useState<string>("");

  useEffect(() => {
    const calculateData = (price: number, receiver: number, sender: number) => {
      setData(
        (price * (receiver / sender))
          .toFixed(2)
          .toString()
          .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
      );
    };
    calculateData(price, receiver, sender);
  });

  return data;
};

export default useCalculate;
