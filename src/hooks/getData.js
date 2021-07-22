import { useEffect, useState } from 'react';
import axios from 'axios';
import { endpoint } from '../constants/Api';

const fetchData = async (url, setData, setError, setLoading) => {
  try {
    const { data } = await axios.get(url);
    setData(data.data);
    setLoading(false);
  } catch (error) {
    setError(error);
  }
};

export default () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData(endpoint, setData, setError, setLoading);
  }, []);

  return {
    data,
    error,
    loading
  };
};
