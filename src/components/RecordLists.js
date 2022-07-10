import React from 'react';
import UseData from './Hooks/UseData';
import RecordList from './RecordList';
import { Grid } from 'semantic-ui-react'
const RecordLists = () => {
          const [records, setRecords] = UseData([]);
          return (
                    <div>
                              <h1>All Records List</h1>

                              <Grid columns='equal' divided>
                                        <Grid.Row>
                                                  <Grid.Column>
                                                            {
                                                                      records.map(record => <RecordList
                                                                                key={record._id}
                                                                                record={record}
                                                                      >
                                                                      </RecordList>)
                                                            }

                                                  </Grid.Column>
                                        </Grid.Row>
                              </Grid>
                    </div>
          );
};

export default RecordLists;