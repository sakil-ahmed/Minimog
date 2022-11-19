import React, { useEffect, useState } from "react";

export const Shop = () => {
  const [data, setData] = useState();
  const options = { method: "GET" };
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://mystoreapi.com/catalog/categories",
        options
      )
        .then((response) => response.json())
        .then((response) => setData(response));
    };

    fetchData();
  }, []);
  console.log(data);
  return <div>Shop</div>;
};
