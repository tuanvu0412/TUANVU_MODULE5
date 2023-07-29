import React, { useEffect, useState } from 'react';
import * as yup from "yup";
import { createVilla, findById, getListType } from '../data/serviceData';
import './formAdd.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Swal from 'sweetalert2'
const CreateVilla = () => {
    const [types, setTypes] = useState([]);

    const handleAddVillaSubmit = async (values) => {
        console.log('123123' + values);
        const type = await findById(values.types);
        const data = { ...values, types: type }
        console.log('312312312' + data);
        
        try {
          await createVilla(data);
          Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Villa created successfully.',
          });
        
        } catch (error) {
          console.log(error);
        }
      };

    useEffect(() => {
        getType();
    }, []);
    const getType = async () => {
        const data = await getListType();

        if (data !== null) {
            setTypes(data);
        }
    }

    return (
        <div className='form-2'>
            <h1>Create a new Villa</h1>
            <Formik
                onSubmit={handleAddVillaSubmit}
                initialValues={{
                    service: "", usable_area: "", max_people: "", standard: "",
                    description: "", pool: "", floor: "", free: "",
                    types: "", costs: "",

                }}
                validationSchema={yup.object({
                    service: yup.string().required(),
                    // email: yup.string().required('email không được để trống').matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "địa chỉ email không hợp lệ"),
                    // namSinh: yup.string().required('năm sinh không được để trống').matches(/^(19[0-9]{2}|[2-9][0-9]{3})+$/, "năm sinh phải lớn hơn 1900"),
                    usable_area: yup.string().required(),
                    max_people: yup.string().required(),
                    standard: yup.string().required(),
                    description: yup.string().required(),
                    pool: yup.string().required(),
                    floor: yup.string().required(),
                    free: yup.string().required(),
                    costs: yup.string().required(),
                    types: yup.string().required(),
                  
                })}
            >
                <Form>
                    <div>
                        <label htmlFor='service'>   Villa: </label>
                        <Field id='service' type="text" name='service' />
                        <ErrorMessage name="service" className='text-area' />
                    </div>
                    <div>
                        <label htmlFor='usable_area'> Usable area:</label>
                        <Field id='usable_area' type="text" name='usable_area' />
                        <ErrorMessage name="usable_area" className='text-area' />
                    </div>
                    <div>
                        <label htmlFor='costs'> Costs:</label>
                        <Field id='costs' type="text" name='costs' />
                        <ErrorMessage name="costs" className='text-area' />
                    </div>
                    <div>
                        <label htmlFor='max_people'> Peoples:</label>
                        <Field id='max_people' type="text" name='max_people' />
                        <ErrorMessage name="max_people" className='text-area' />
                    </div>
                    <div>
                        <label htmlFor='type'> Types:</label>
                        <Field as='select' id='type' name='types'>
                            <option value={""}></option>
                            {types.length > 0 && types.map(t => (
                                <option key={t.id} value={t.id}>{t.name}</option>
                            ))}
                        </Field>
                    </div>
                    <div>
                        <label htmlFor='standard'> Peoples:</label>
                        <Field id='standard' type="text" name='standard' />
                        <ErrorMessage name="standard" className='text-area' />
                    </div>
                    <div>
                        <label htmlFor='description'> Description:</label>
                        <Field id='description' type="text" name='description' />
                        <ErrorMessage name="description" className='text-red' />
                    </div>

                    <div>
                        <label htmlFor='pool'> Pool:</label>
                        <Field id='pool' type="text" name='pool' />
                        <ErrorMessage name="pool" className='text-area' />
                    </div>
                    <div>
                        <label htmlFor='floor'> Floor:</label>
                        <Field id='floor' type="text" name='floor' />
                        <ErrorMessage name="floor" className='text-area' />
                    </div>
                    <div>
                        <label htmlFor='free'> Free:</label>
                        <Field id='free' type="text" name='free' />
                        <ErrorMessage name="free" className='text-area' />
                    </div>
                    <button type="submit">Create</button>
                </Form>
            </Formik>
        </div>
    );
};
export default CreateVilla;