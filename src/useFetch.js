import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [status, setStatus] = useState({ data: null, loading: true });

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      try {
        const res = await fetch(url, { signal: controller.signal });

        if (res.status !== 200) {
          const error = new Error(
            "That does not seem right. Please try a different keyword."
          );
          error.name = "NotFound";
          throw error;
        }

        const json = await res.json();
        setStatus({
          data: json.sort((curr, next) => curr.name.common > next.name.common),
          loading: false,
        });
      } catch (err) {
        // could be improved
        // if (err.name === "AbortError") {
        //   throw new Error("Something went wrong.");
        // } else {
        //   throw err;
        // }
        setStatus({ data: [], loading: false });
      }
    })();

    // cancel request if component unmounts
    return () => {
      controller.abort();
    };
  }, [url]);

  return status;
}
