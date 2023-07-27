import React, { useEffect, useState } from 'react';
import * as yup from "yup";
import { createVilla, findByid, getListType } from '../data/serviceData';
import './formAdd.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
const CreateVilla = () => {
    const [types, setTypes] = useState([]);
    const handleAddVillaSubmit = async (value) => {

        console.log(value);
        const type = await findByid(value.types);
        const data = { ...value, types: type }
       
        await createVilla(data)
            .then(response => {
                alert('Create success');
            })
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(() => {
        getType();
    }, []);
    const getType = async () => {
        const data = await getListType();
        setTypes(data);
    }
    return (
        <div className='form-2  '>
            <h1>Create a new Villa</h1>
            <Formik
                onSubmit={handleAddVillaSubmit}
                initialValues={{
                    villa: "", area: "", people: "", standard: "",
                    description: "", pool: "", floor: "", free: "",
                    types: "",
                }}
                validationSchema={yup.object({
                    villa: yup.string().required('tên không được để trống'),
                    // email: yup.string().required('email không được để trống').matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "địa chỉ email không hợp lệ"),
                    // namSinh: yup.string().required('năm sinh không được để trống').matches(/^(19[0-9]{2}|[2-9][0-9]{3})+$/, "năm sinh phải lớn hơn 1900"),
                    area: yup.string().required('quốc tịch không được để trống'),
                    people: yup.string().required('tỉnh thành không được để trống'),
                    standard: yup.string().required('quân huyện không được để trống'),
                    description: yup.string().required('phường xã không được để trống'),
                    pool: yup.string().required('số nhà không được để trống'),
                    floor: yup.string().required('số điện thoại không được để trống'),
                    free: yup.string().required('số CMND/Hộ chiếu không được để trống'),
                })}
            >
                <Form>
                    <div>
                        <label htmlFor='villa'>   Villa: </label>
                        <Field id='villa' type="text" name='villa' />
                        <ErrorMessage name="villa" className='text-area' />
                    </div>
                    <div>
                        <label htmlFor='area'> Usable area:</label>
                        <Field id='area' type="text" name='area' />
                        <ErrorMessage name="area" className='text-area' />
                    </div>
                    <div>
                        <label htmlFor='costs'> Costs:</label>
                        <Field id='costs' type="text" name='costs' />
                        <ErrorMessage name="costs" className='text-area' />
                    </div>
                    <div>
                        <label htmlFor='people'> Peoples:</label>
                        <Field id='people' type="text" name='people' />
                        <ErrorMessage name="people" className='text-area' />
                    </div>
                    <div>
                        <label htmlFor='type'> Types:</label>
                        <Field as='select' id='type' name='types'>
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
                        <ErrorMessage name="description" className='text-area' />
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