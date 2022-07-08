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
    }, 10000);
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    setStatus(() => {
      return { data: [], loading: true, error: null };
    });

    (async () => {
      try {
        const response = await fetch(url, { signal: controller.signal });

        if (response.status !== 200) {
          throw new Error("Page not found.");
        }

        clearTimeout(timeoutTimer.current);
        const json = await response.json();

        setStatus((prev) => {
          return { ...prev, data: json, loading: false };
        });
      } catch (error) {
        if (error.name === "AbortError") {
          console.warn(
            "Fetch request successfully aborted. You can safely ignore this message."
          );
        } else if (error.message === "Page not found.") {
          clearTimeout(timeoutTimer.current);
          setStatus(() => {
            return { data: [], loading: true, error: null };
          });
        } else {
          clearTimeout(timeoutTimer.current);
          setStatus((prev) => {
            return {
              ...prev,
              error: error,
            };
          });
        }
      }
    })();

    return () => {
      controller.abort();
      clearTimeout(timeoutTimer.current);
    };
  }, [url]);

  return status;
}
