//this custom hook demonstrates how to utilise custom hook as a reusable logic with newslibrary and newslab

import { useState, useEffect } from 'react';

const useAirtableCRUD = (baseId, tableName) => {
  const [data, setData] = useState([]);

  const url = `https://api.airtable.com/v0/${baseId}/${tableName}?api_key=${process.env.REACT_APP_AIRTABLE_API_KEY}`;

  //Read Operation
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setData(data.records);
    };
    fetchData();
  }, [url]);

  //Create Operation
  const createRecord = async (record) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(record),
    });
    const data = await response.json();
    const newData = [...data.records, record];
    setData(newData);
  }
  
  //Update Operation
  const updateRecord = async (record, id) => {
    const response = await fetch(`${url}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(record),
    });
    const data = await response.json();
    const newData = data.records;
    setData(newData);
  }

  //Delete Operation
  const deleteRecord = async (id) => {
    const response = await fetch(`${url}/${id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    const newData = data.records;
    setData(newData);
  };

  return data;
};

export default useAirtableCRUD;