import { useState, useEffect } from 'react';

const useAirtableCRUD = (baseId, tableName) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // TODO: Implement Airtable fetch logic here
  }, [baseId, tableName]);

  return data;
};

export default useAirtableCRUD;
