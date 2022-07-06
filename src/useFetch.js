import React, { useEffect, useState } from "react";

export default function useFetch(url) {
  const [status, setStatus] = useState({ data: [], loading: true });

  useEffect(() => {
    (async () => {
      const response = await fetch(url);
      const json = await response.json();

      setStatus({ data: json, loading: false });
    })();
  }, [url]);

  return status;
}
