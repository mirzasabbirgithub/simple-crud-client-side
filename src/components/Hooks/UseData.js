import React, { useEffect, useState } from 'react';

const UseData = () => {
          const [records, setRecords] = useState([]);
          useEffect(() => {
                    fetch('http://localhost:5000/record')
                              .then(res => res.json())
                              .then(data => setRecords(data));
          }, [])
          return [records, setRecords];
};

export default UseData;