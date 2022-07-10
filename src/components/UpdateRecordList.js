import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Icon, Image } from 'semantic-ui-react';
const UpdateRecordList = ({ record }) => {
          const { _id, name, detials, img1, img2 } = record;
          const navigate = useNavigate();

          const navigateToCheckout = id => {
                    navigate(`/record/${id}`);
          }
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
                                        <Button onClick={() => navigateToCheckout(_id)} className='btn btn-success'>Update</Button>
                              </Card.Content>
                    </Card>
          );
};

export default UpdateRecordList;