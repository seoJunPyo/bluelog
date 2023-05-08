import React from 'react';

const useFetchState = () => {
  const [isLoading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const request = async tryFn => {
    setLoading(true);

    try {
      tryFn();
    } catch (e) {
      setError(e);
      console.log('error');
    } finally {
      setLoading(false);
    }
  };

  return { request, isLoading, error };
};

export default useFetchState;
