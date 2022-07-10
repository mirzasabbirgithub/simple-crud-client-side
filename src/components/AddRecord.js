import React from 'react';
import { useForm } from "react-hook-form";
import { Form, Button } from 'semantic-ui-react'
import { ToastContainer, toast } from 'react-toastify';
const AddRecord = () => {
          const { register, handleSubmit } = useForm();
          const onSubmit = data => {
                    const url = `https://blooming-woodland-08999.herokuapp.com/record`;
                    fetch(url, {
                              method: 'POST',
                              headers: {
                                        'content-type': 'application/json'
                              },
                              body: JSON.stringify(data)
                    })
                              .then(res => res.json())
                              .then(result => {
                                        console.log(result);
                                        toast('Record has been added successfully! ')
                              })

          };
          return (
                    <>
                              <h2>Add A Record</h2>
                              <Form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                                        <input autocomplete="off" placeholder='Record Name' {...register("name", { required: true, maxLength: 50 })} />
                                        <textarea autocomplete="off" placeholder='Detials' {...register("detials")} />
                                        <input className='mb-2' placeholder='Photo-1 URL' type="text" {...register("img1")} />
                                        <input className='mb-2' placeholder='Photo-2 URL' type="text" {...register("img2")} />
                                        <Button type="submit" value="Add Record">Add Record</Button>
                                        <ToastContainer />
                              </Form>
                    </>



          );
};

export default AddRecord;