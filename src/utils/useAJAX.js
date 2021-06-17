import { useState, useEffect } from "react";

function usePOST(url, sendData) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [xhr, setXhr] = useState({});
  const [response, setResponse] = useState({});
  const [error, setError] = useState(null);

    fetch(url, {
      method: "POST",
      body: JSON.stringify(sendData),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(res => {
        setResponse(res.text());
        setXhr(res);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err);
        setIsError(true);
      });
  // useEffect(() => {
  // }, [url, sendData]);

  return {
    isLoading,
    isError,
    error,
    xhr,
    data: response
  };
}

export { usePOST };