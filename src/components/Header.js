import React from 'react';
import { Menu, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';


const Header = () => {

          return (
                    <Segment inverted>
                              <Menu inverted secondary>
                                        <Menu.Item as={Link} to="/" name='Home'
                                        />
                                        <Menu.Item as={Link} to="/addrecord" name='Add A Record'
                                        />
                                        <Menu.Item as={Link} to="/updaterecord" name='Update A Record'
                                        />
                                        <Menu.Item as={Link} to="/deleterecord" name='Delete A Record'
                                        />

                              </Menu>
                    </Segment>
          );
};


export default Header;