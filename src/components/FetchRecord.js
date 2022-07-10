import React from 'react';
import { Button, Card, Icon, Image } from 'semantic-ui-react';
const FetchRecord = ({ record, handleDelete }) => {
          const { _id, name, detials, img1, img2 } = record;
          return (
                    <Card>
                              <Image src={img1} wrapped ui={false} />
                              <Image src={img2} wrapped ui={false} />
                              <Card.Content>
                                        <Card.Header>{name}</Card.Header>
                                        <Card.Meta>

                                        </Card.Meta>
                                        <Card.Description>
                                                  {detials}
                                        </Card.Description>
                              </Card.Content>
                              <Card.Content extra>
                                        <Button onClick={() => handleDelete(record._id)} className='btn btn-success'>Delete</Button>
                              </Card.Content>
                    </Card>
          );
};

export default FetchRecord;
