import { useState } from "react";

const defaultHeaders = {
  "Content-type": "application/json; charset=UTF-8"
};

function usePOST(url, sendData, headers={}) {
  for(const key in defaultHeaders) {
    if(key in headers) continue;
    headers[key] = defaultHeaders[key];
  }

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [xhr, setXhr] = useState({});
  const [response, setResponse] = useState({});
  const [error, setError] = useState(null);

  return {
    isLoading,
    isError,
    error,
    xhr,
    data: response,
    sendData: function() {
      fetch(url, {
        method: "POST",
        body: JSON.stringify(sendData),
        headers
      })
        .then(res => {
          setXhr(res);
          return res.json();
        })
        .then(text => {
          setResponse(text);
          setIsLoading(false);
        })
        .catch(err => {
          setError(err);
          setIsError(true);
        });
    }
  };
}

export { usePOST };