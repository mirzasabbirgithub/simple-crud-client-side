import React from 'react';
import { Grid, Card, Icon, Image } from 'semantic-ui-react'

const RecordList = ({ record }) => {
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
                                        <a>
                                                  <Icon name='location arrow' />
                                                  {_id}
                                        </a>
                              </Card.Content>
                    </Card>
          );
};

export default RecordList;