//this custom hook demonstrates how to utilise custom hook as a reusable logic with newslibrary and newslab

import { useState, useEffect } from 'react';

const useAirtableCRUD = (baseId, tableName) => {
  const [data, setData] = useState([]);

  const url = new URL(`https://api.airtable.com/v0/${baseId}/${tableName}`);

  //Read Operation
  //TODO: Idea to include some logic which only refetches data when there is a change in the data
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_BEARER_TOKEN}`,
        },
      }); 
      const loadData = await response.json();
      setData(loadData.records);
    };
    fetchData();
  }, []);

  //Create Operation
  const createRecord = async (record) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_BEARER_TOKEN}`,
      },
      body: JSON.stringify({ fields: record }),
    });
    // const data = await response.json();
    // const newData = [...data.records, record];
    // setData(newData);
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

  const CRUDArray =  {data, createRecord, updateRecord, deleteRecord};
  return CRUDArray;


};

export default useAirtableCRUD;
