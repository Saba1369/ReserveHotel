import react, { useCallback, useState } from "react";
import axios from "axios";

const useAxios = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [responseData, setResponseData] = useState(null);
  const startRequest = useCallback(async (config) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios({
        method: config.method || "GET",
        url: config.url,
        data: config.data || null,
        params: config.params || null,
        headers: config.headers || {},
      });
      setLoading(false);
      setResponseData(response.data);
      return response.data;
    } catch (error) {
      setLoading(false);
      setError(error);
      throw error;
    }
  }, []);

  return { startRequest, responseData, loading, error };
};

export default useAxios;
