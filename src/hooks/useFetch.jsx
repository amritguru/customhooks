import { useState, useEffect, useCallback } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            const result = await response.json();
            setData(result);
        } catch (err) {
            setError(err.messsage);
        } finally {
            setLoading(false);
        }
    }, [url]);

    useEffect(() => {
        if (url) {
            fetchData();
        }
    }, [fetchData, url]);

    return { data, loading, error};
};

export default useFetch;
