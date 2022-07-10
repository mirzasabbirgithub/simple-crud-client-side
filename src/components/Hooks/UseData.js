import React, { useEffect, useState } from 'react';

const UseData = () => {
          const [records, setRecords] = useState([]);
          useEffect(() => {
                    fetch('https://blooming-woodland-08999.herokuapp.com/record')
                              .then(res => res.json())
                              .then(data => setRecords(data));
          }, [])
          return [records, setRecords];
};

export default UseData;