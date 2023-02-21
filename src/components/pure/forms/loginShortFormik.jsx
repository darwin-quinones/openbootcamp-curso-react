import React from 'react';
import { Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup'


const loginSchema = Yup.object().shape(
    {
        email: Yup.string().email('Invalid email format').required('Emial is required'),
        password: Yup.string().required('Password is required')
    }
)



const LoginShortFormik = () => {

    const initialCredentials = {
        email: '',
        password: ''
    }

    return (
        <div>
        <h4>Login form</h4>
            <Formik
                //** Initial value that the form will take
                initialValues={initialCredentials}
                // *** Yup validation Schema
                validationSchema = {loginSchema}
                // *** When click this function is executed
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                    // We save the sata in the localstorage
                    localStorage.setItem('credentials', values)
                }}
            >
                {/* We obtain props from Formik */}
                {({values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur}) => (
                        <Form>
                            <label htmlFor="firstName">Email</label>
                            <Field id="email" type="email" name="email" placeholder="example@gmail.com" />
                            {/* Email errors */}
                            {
                                /* If exists error and also inpud is touched return message */
                                errors.email && touched.email && 
                                (                                  
                                    <ErrorMessage name="email" component='div'/>           
                                )
                            }
                            <label htmlFor="email">Password</label>
                            <Field id="password" name="password" placeholder="*****" type="password" />
                             {/* password errors */}
                             {
                                /* If exists error and also inpud is touched return message */
                                errors.password && touched.password && 
                                (
                                    <ErrorMessage name="password" component='div'/>        
                                )
                            }
                            <button type="submit">Login</button>
                            {isSubmitting ? (<p>Login your credetials....</p>): null}
                        </Form>
                    )
                }

            </Formik>
        </div>
    );
}

export default LoginShortFormik;
