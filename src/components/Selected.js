import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button, Image, Form } from 'semantic-ui-react';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';

const Selected = () => {
          const { Id } = useParams();
          const [record, setRecord] = useState({});
          const { register, handleSubmit } = useForm();

          useEffect(() => {
                    const url = `https://blooming-woodland-08999.herokuapp.com/record/${Id}`;
                    fetch(url)
                              .then(res => res.json())
                              .then(data => setRecord(data));
          }, []);


          const nameRef = useRef("")
          const detailRef = useRef("")
          const img1Ref = useRef("")
          const img2Ref = useRef("")

          const handleUpdate = event => {
                    const name = nameRef.current.value;
                    const detial = detailRef.current.value;
                    const img1 = img1Ref.current.value;
                    const img2 = img2Ref.current.value;
                    const updatedRecord = { name, detial, img1, img2 };

                    const url = `https://blooming-woodland-08999.herokuapp.com/record/${Id}`;
                    fetch(url, {
                              method: "PUT",
                              headers: {
                                        'content-type': 'application/json'
                              },
                              body: JSON.stringify(updatedRecord)
                    })
                              .then(res => res.json())
                              .then(data => {
                                        console.log('success', data)
                                        toast('Record has been updated!')
                              })

          }

          return (
                    <>
                              <h2>Selected Record For Update</h2>
                              <Card>
                                        <Image src={record.img1} wrapped ui={false} />
                                        <Image src={record.img2} wrapped ui={false} />
                                        <Card.Content>
                                                  <Card.Header>{record.name}</Card.Header>
                                                  <Card.Meta>

                                                  </Card.Meta>
                                                  <Card.Description>
                                                            {record.detials}
                                                  </Card.Description>
                                        </Card.Content>
                                        <Card.Content extra>

                                                  <Form>
                                                            <input ref={nameRef} type="text" name="update" placeholder='Update Name' autoComplete='off' required />
                                                            <br />
                                                            <input ref={detailRef} type="text" name="update" placeholder='Update Detials' autoComplete='off' required />
                                                            <br />
                                                            <input ref={img1Ref} type="text" name="update" placeholder='Update Img1' autoComplete='off' required />
                                                            <br />
                                                            <input ref={img2Ref} type="text" name="update" placeholder='Update Img2' autoComplete='off' />
                                                            <br />
                                                            <Button onClick={handleUpdate} type="submit" value="Update">Update</Button>
                                                  </Form>
                                                  <ToastContainer />

                                        </Card.Content>
                              </Card>
                    </>
          );
};

export default Selected;