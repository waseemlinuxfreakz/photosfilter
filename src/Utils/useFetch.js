import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(url)
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal})
      .then(res => {
        if (!res.ok) { 
          throw Error('could not fetch the data for that resource');
        } 
        return res.json();
      })
      .then(data => {
        setIsPending(false);
        console.log(data)
        setData(data);
        setError(null);
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('fetch http call aborted')
        } else {
          setIsPending(false);
          setError(err.message);
        }
      })
    }, 1000);

    return () => abortCont.abort();
  }, [url])

  const obj = { data, isPending, error }
  return obj;
}
 
export default useFetch;