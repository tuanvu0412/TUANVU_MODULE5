function formInformation(){
    return(
        <>
        <h1>Contact Form</h1>
        <Formik
            initialValues={{
                name: "",
                email: "",
                phone: "",
                message: "",
            }}
            validatationeSchema={yup.object({
                name: yup.string().required("name is required"),
                email: yup.string().required("email is required").email("invalid email"),
                phone: yup.string().required("phone is required"),
                message: yup.string().required("message is required"),
            })
            }
            onSubmit={() => {
                alert("create successful");
            }}
            >
                <Form>
                    <div>
                        <label htmlFor="name">Name: </label>
                        <Field id="name" name="name" type="text" />
                        <ErrorMessage name="name" component="div" className="text-red" />
                    </div>
                    <div>
                    <label htmlFor="email">Email: </label>
                        <Field id="email" name="email" type="text" />
                        <ErrorMessage name="email" component="div" className="text-red" />
                    </div>
                    <div>
                    <label htmlFor="phone">Phone number: </label>
                        <Field id="phone" name="phone" type="text" />
                        <ErrorMessage name="phone" component="div" className="text-red" />
                    </div>
                    <div>
                    <label htmlFor="message">Message: </label>
                        <Field as="textarea" id="message" name="message" type="text" />
                        <ErrorMessage name="message" component="div" className="text-red" />
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </Form>
        </Formik>
        </>
    )
}