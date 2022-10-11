import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useGetOrders = (API) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(API)
      .then((response) => {
        setOrders(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [API]);

  return { orders, loading, error };
}

export default useGetOrders;