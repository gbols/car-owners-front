import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState(null);
  useEffect(() => {
    setStatus("pending");
    fetch(url, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setStatus("resolved");
      })
      .catch((err) => {
        setStatus("rejected");
      });
  }, [url]);

  return [status, data];
};

export { useFetch };
