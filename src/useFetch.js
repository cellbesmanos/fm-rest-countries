import { useEffect, useState, useRef } from "react";

export default function useFetch(url) {
  const [status, setStatus] = useState({
    data: [],
    loading: true,
    error: null,
  });
  let timeoutTimer = useRef(null);

  useEffect(() => {
    timeoutTimer.current = setTimeout(() => {
      const error = new Error(
        "Connection timeout. Please check your internet connection."
      );
      error.name = "NetworkError";
      setStatus((prev) => {
        return { ...prev, error: error };
      });
    }, 8000);
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      try {
        const response = await fetch(url, { signal: controller.signal });

        if (response.status !== 200) {
          const error = new Error(
            "That does not seem right. Please use a country's name or its partial name."
          );
          error.name = "NotFound";

          throw error;
        }
        clearTimeout(timeoutTimer.current);
        const json = await response.json();

        setStatus({ ...status, data: json, loading: false });
      } catch (error) {
        if (error.name === "AbortError") {
          console.warn(
            "Fetch request successfully aborted. You can safely ignore this message."
          );
        } else if (error.name === "NotFound") {
          clearTimeout(timeoutTimer.current);
          setStatus((prev) => {
            return {
              ...prev,
              error: error,
            };
          });
        } else {
          console.error(error.message);
        }
      }
    })();

    return () => {
      controller.abort();
      clearTimeout(timeoutTimer.current);
    };
  }, [url, status]);

  return status;
}
