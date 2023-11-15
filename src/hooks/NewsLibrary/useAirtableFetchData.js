import { useState, useEffect } from 'react';

const useAirtableFetchData = (baseId, tableName) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // TODO: Implement Airtable fetch logic here
  }, [baseId, tableName]);

  return data;
};

export default useAirtableFetchData;
