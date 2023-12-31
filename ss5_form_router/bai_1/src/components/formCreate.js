import { ErrorMessage, Field, Formik } from 'formik';
import * as yup from "yup";

function CreateForm() {
    const handleSubmit = (message) => {
        message.preventDefault();

        alert('Form submitted successfully!');
    };
    return (
        <>
            <h2>Contact Form</h2>
            <Formik
                initialValues={{ fullName: "", email: "", phone: "", message: "" }}
                validationSchema={yup.object({
                    fullName: yup.string().required('need to enter name'),
                    email: yup.string().required('need to enter email').matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/),
                    phone: yup.string().required('need to enter phone'),
                    message: yup.string().required('need to enter message')
                })}
            >
                <form onSubmit={handleSubmit}>
                    <div>
                        <lable htmlFor='fullName'>Name:</lable>
                        <Field id='fullName' type='text' name='fullName'></Field>
                        <ErrorMessage name="fullName" component="div" className='text-area' />
                    </div>
                    <div>
                        <lable htmlFor='email'>Email:</lable>
                        <Field id='email' type='text' name='email'></Field>
                        <ErrorMessage name="email" component="div" className='text-area' />
                    </div>
                    <div>
                        <lable htmlFor='phone'>Phone:</lable>
                        <Field id='phone' type='text' name='phone'></Field>
                        <ErrorMessage name="phone" component="div" className='text-area' />
                    </div>
                    <div>
                        <lable htmlFor='message'>Message:</lable>
                        <textarea cols={17} rows={3} id='message' type='text' name='message'></textarea>
                        <ErrorMessage name="message" component="div" className='text-area' />
                    </div>
                    <div>
                        <button type="submit">Create</button>
                    </div>
                </form>
            </Formik>
        </>
    )
}
export default CreateForm;