import React, { useEffect, useState } from 'react';
import * as yup from "yup";
import { createRoom, createVilla, findById, getListType } from '../data/serviceData';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import Swal from 'sweetalert2'
import { createCustomer, findCustomerById, findGenderById, getGender, getListTypeCustomer } from '../data/customerData';
const CreateCustomer = () => {
    const [customerTypes, setCustomerTypes] = useState([]);
    const [genders, setGenders] = useState([]);
    const handleAddCustomerSubmit = async (values) => {
        const type = await findCustomerById(values.customerTypes);
        const gender= await findGenderById(values.genders);
        const data = {...values, customerTypes: type,genders:gender }
        try {
            await createCustomer(data);
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Customer created successfully.',
            });

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getCustomer();
        getListGender();
    }, []);
    const getCustomer = async () => {
        const data = await getListTypeCustomer();
        if (data !== null) {
            setCustomerTypes(data);
        }
    }
    const getListGender = async () => {
        const data = await getGender();
        if (data !== null) {
            setGenders(data);
        }
    };
    return (
        <div className='form-2'>
            <h1>Create a new Customer</h1>
            <Formik
                onSubmit={handleAddCustomerSubmit}
                initialValues={{
                    name: "", date_of_birth: "", gender: "", id_card: "",
                    phone_number: "", email: "", customerTypes: "", address: "",
                }}
                validationSchema={yup.object({
                    name: yup.string().required(),
                    email: yup.string().required().matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "Please enter the correct format"),
                    date_of_birth: yup.string().required(),
                    gender: yup.string().required(),
                    id_card: yup.string().required(),
                    phone_number: yup.string().required(),
                    customerTypes: yup.string().required(),
                    address: yup.string().required(),

                })}
            >
                <Form>
                    <div>
                        <label htmlFor='name'>Name: </label>
                        <Field id='name' type="text" name='name' />
                        <ErrorMessage name="name" className='text-area' />
                    </div>
                    <div>
                        <label htmlFor='email'> Email:</label>
                        <Field id='email' type="text" name='email' />
                        <ErrorMessage name="email" className='text-area' />
                    </div>
                    <div>
                        <label htmlFor='date_of_birth'> Date Of Birth:</label>
                        <Field id='date_of_birth' type="text" name='date_of_birth' />
                        <ErrorMessage name="date_of_birth" className='text-area' />
                    </div>
                    <div>
                        <label htmlFor='gender'> Gender: </label>
                        <Field as='select' id='gender' name='gender'>
                            <option value={""}></option>
                            {genders.length > 0 && genders.map(t => (
                                <option key={t.id} value={t.id}>{t.name}</option>
                            ))}
                        </Field>
                        <ErrorMessage name="gender" className='text-area' />
                    </div>
                    <div>
                        <label htmlFor='customerTypes'> Customer type:</label>
                        <Field as='select' id='customerTypes' name='customerTypes'>
                            <option value={""}></option>
                            {customerTypes.length > 0 && customerTypes.map(t => (
                                <option key={t.id} value={t.id}>{t.name}</option>
                            ))}
                        </Field>
                        <ErrorMessage name="customerTypes" className='text-area' />
                    </div>
                    <div>
                        <label htmlFor='id_card'> Peoples:</label>
                        <Field id='id_card' type="text" name='id_card' />
                        <ErrorMessage name="id_card" className='text-area' />
                    </div>
                    <div>
                        <label htmlFor='phone_number'> Description:</label>
                        <Field id='phone_number' type="text" name='phone_number' />
                        <ErrorMessage name="phone_number" className='text-area' />
                    </div>

                    <div>
                        <label htmlFor='address'> Pool:</label>
                        <Field id='address' type="text" name='address' />
                        <ErrorMessage name="address" className='text-area' />
                    </div>
                    <button type="submit">Create</button>
                </Form>
            </Formik>
        </div>
    );
};
export default CreateCustomer;