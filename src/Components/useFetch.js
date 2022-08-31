import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [fetchedArr, setFetchedArr] = useState([]);
  const fetchData = async () => {
    const resp = await fetch(url);
    const arrRecord = await resp.json();
    setFetchedArr(arrRecord);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return fetchedArr;
};

export default useFetch;
