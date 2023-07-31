import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import * as yup from "yup";
import Swal from 'sweetalert2'
import { useNavigate, useParams } from "react-router-dom";
import { editVilla, findVillaById, getListType } from "../data/serviceData";
const EditServices = () => {
    const navigate = useNavigate();
    const [types, setTypes] = useState([]);

    useEffect(() => {
        getList();
        getVillaById();
    }, [])

    const getList = async () => {
        const data = await getListType();
        setTypes(data);
    }

    const [services, setServices] = useState([]);
    const param = useParams();
    const getVillaById = async () => {
        const data = await findVillaById(param.id);
        setServices(data);
    }
    const handldEditVilla = async (values) => {
        const type = await findVillaById(values.types);
        const data = { ...values, types: type };
        await editVilla(data).then(() => {
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Villas update successfully.',
            })
        })


    }
    return (

        <div className="background-image">
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-6">
                        <h2>Edit <b>Products</b></h2>
                    </div>
                </div>
            </div>

            <div>
                {services.id && (
                    <Formik
                        initialValues={{
                            id: services.id,
                            service: services.service,
                            usable_area: services.usable_area,
                            costs: services.costs,
                            max_people: services.max_people,
                            types: services.types.id,
                            standard: services.standard,
                            description: services.description,
                            pool: services.pool,
                            floor: services.floor,
                            free: services.free,
                        }}
                        validationSchema={yup.object({
                            service: yup.string().required(),
                            usable_area: yup.string().required(),
                            costs: yup.string().required(),
                            max_people: yup.string().required(),
                            types: yup.string().required(),
                            standard: yup.string().required(),
                            description: yup.string().required(),
                            pool: yup.string().required(),
                            floor: yup.string().required(),
                            free: yup.string().required(),

                        })}
                        onSubmit={async (values) => {
                            await handldEditVilla(values)
                            navigate("/")
                        }}
                    >
                        <Form>
                            <div>
                                <label htmlFor='service'> Villa: </label>
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
                                <label htmlFor='types'> Types:</label>
                                <Field as='select' id='types' name='types'>
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
                            <button type="submit">update</button>
                        </Form>
                    </Formik>
                )}
            </div >
        </div>
    )
};
export default EditServices;


