import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useHttp = () => {
  const [errorWhileFetch, setErrorWhileFetch] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const authAPI = async (url, config) => {
    try {
      setErrorWhileFetch(null);
      setIsLoading(true);
      const response = await fetch(url, config);
      const data = await response.json();
      console.log(response);
      console.log(data);
      const error = data?.error?.message && data.error.message;
      if (error) throw new Error(error);
      navigate("/signin");
      setIsLoading(false);
      setErrorWhileFetch(null);
    } catch (err) {
      setErrorWhileFetch(err.message);
      if (err.message === "EMAIL_EXISTS") navigate("/alert");
    }
  };

  return {
    authAPI,
    errorWhileFetch,
    setErrorWhileFetch,
    isLoading,
  };
};

export default useHttp;
