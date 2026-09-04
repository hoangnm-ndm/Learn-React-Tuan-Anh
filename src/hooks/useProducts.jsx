/**
 * Input: params search, find, filter, pagination
 * Output: thông tin trang hiện tại và kết quả sau query.
 */

import { useEffect, useState } from "react";
import { getProducts } from "../api/productApi";

export const useProducts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await getProducts();
        setData(res.products);
      } catch (error) {
        setError(`Co loi xay ra: ${JSON.stringify(error)}`);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  return { data, loading, error };
};
