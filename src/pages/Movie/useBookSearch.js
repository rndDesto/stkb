import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useBookSearch(query, pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [books, setBooks] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setBooks([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      method: 'GET',
      url: 'http://www.omdbapi.com/',
      params: { apikey:'faf7e5bb', s: query, page: pageNumber },
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setBooks(prevBooks => {
        return [...new Set([...prevBooks, ...res.data.Search.map(b => b.Title)])];
      });
      setHasMore(res.data.Search.length > 0);
      setLoading(false);
    }).catch(e => {
      if (axios.isCancel(e)) return;
      setError(true);
    });
    return () => cancel();
  }, [query, pageNumber]);

  return { loading, error, books, hasMore };
}