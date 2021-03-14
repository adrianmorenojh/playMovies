import { useState, useEffect } from "react";

const BASE_API = "https://yts.mx/api/v2/";

export function UseFetchData({ category }) {
  const [state, setState] = useState([]);

  const [number, setNumber] = useState(1);

  useEffect(() => {
    const abortController = new window.AbortController();
    const signal = abortController.signal;
    window
      .fetch(
        `${BASE_API}list_movies.json?genre=${category}&limit=40&page=${number}`,
        { signal: signal }
      )
      .then((response) => response.json())
      .then((data) => setState(data));

    return function cleanup() {
      abortController.abort();
    };
  }, [category, number]);

  return { state, setNumber, number };
}
