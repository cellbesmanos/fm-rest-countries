import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [status, setStatus] = useState({ data: null, loading: true });

  useEffect(() => {
    const controller = new AbortController();
    const timeoutMsg =
      "Connection timeout. Please check your internet connection";

    (async () => {
      try {
        const res = await fetch(url, { signal: controller.signal });
        const timeoutID = setTimeout(() => controller.abort(timeoutMsg), 2000);

        if (res.status !== 200) {
          throw new Error(res.statusText);
        } else if (res.status === 200) {
          clearTimeout(timeoutID);
        }

        const json = await res.json();
        setStatus({ data: json, loading: false });
      } catch (err) {
        throw err;
      }
    })();

    // cancel request if component unmounts
    return () =>
      controller.abort("Cannot finish the request. Component was unmounted.");
  }, [url]);

  return status;
}
