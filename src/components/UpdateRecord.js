import React from 'react';
import UseData from './Hooks/UseData';
import { Card, Grid } from 'semantic-ui-react'
import UpdateRecordList from './UpdateRecordList';

const UpdateRecord = () => {
          const [records, setRecords] = UseData([]);


          return (
                    <div >
                              <h1>Update A Record</h1>

                              <Grid columns='equal' divided>
                                        <Grid.Row>
                                                  <Grid.Column>
                                                            {
                                                                      records.map(record => <UpdateRecordList
                                                                                key={record._id}
                                                                                record={record}
                                                                      >
                                                                      </UpdateRecordList>)
                                                            }

                                                  </Grid.Column>
                                        </Grid.Row>
                              </Grid>
                    </div>
          );
};

export default UpdateRecord;