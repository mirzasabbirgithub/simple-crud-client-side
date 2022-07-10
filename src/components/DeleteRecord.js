import React from 'react';
import { Grid } from 'semantic-ui-react'
import FetchRecord from './FetchRecord';
import UseData from './Hooks/UseData';
import { ToastContainer, toast } from 'react-toastify';
const DeleteRecord = () => {
          const [records, setRecords] = UseData([]);

          const handleDelete = id => {
                    const proceed = window.confirm('Are you sure to detele the item?');
                    if (proceed) {
                              const url = `https://blooming-woodland-08999.herokuapp.com/record/${id}`;
                              fetch(url, {
                                        method: 'DELETE'
                              })
                                        .then(res => res.json())
                                        .then(data => {
                                                  const remaining = records.filter(record => record._id !== record);
                                                  setRecords(remaining);
                                                  toast('Record has been deleted ');
                                                  window.location.reload();
                                        })
                    }
          }

          return (
                    <div >
                              <h1>Delete A Record</h1>

                              <Grid columns='equal' divided>
                                        <Grid.Row>
                                                  <Grid.Column>
                                                            {
                                                                      records.map(record => <FetchRecord
                                                                                key={record._id}
                                                                                record={record}
                                                                                handleDelete={handleDelete}
                                                                      >
                                                                      </FetchRecord>)
                                                            }
                                                            <ToastContainer />
                                                  </Grid.Column>
                                        </Grid.Row>
                              </Grid>
                    </div>
          );
};

export default DeleteRecord;