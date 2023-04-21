import React, { } from 'react';
import { useHistory } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup'
import { login, getAllUsers, getAllPagedUsers, getUserByID, createUser, updateUser, deleteUser } from '../../services/axiosCRUDService.js'



const AxiosCRUDExample = () => {
    const navigate = useHistory()
    const initialCredentials = {
        email: '',
        password: ''
    }

    const loginSchema = Yup.object().shape(
        {
            email: Yup.string().email('Invalid email format').required('Emial is required'),
            password: Yup.string().required('Password is required')
        }
    )

    const authUser = async (values) => {
        login(values.email, values.password)
            .then((response) => {
                if (response.data.token) {
                    // alert( JSON.stringify(response.data.token))
                    sessionStorage.setItem('token', response.data.token)
                } else {
                    sessionStorage.removeItem('token')
                    throw new Error('Login failure')
                }
            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`)
                sessionStorage.removeItem('token')
            })
            .finally(() => console.log('Login Done'))
    }

    // CRUD Example
    const obtainAllUsers = () => {
        getAllUsers()
            .then((response) => {
                if (response.data.data && response.status === 200) {
                    alert(JSON.stringify(response.data.data))
                } else {
                    throw new Error('No users found')
                }
            })
            .catch((error) => alert(`Something went wrong while fetching users: ${error}`))
            .finally(() => console.log('Users have been fetched'))

    }

    const obtainAllPagedUsers = (page) => {
        getAllPagedUsers(page)
            .then((response) => {
                if (response.data.data && response.status === 200) {
                    alert(JSON.stringify(response.data.data))
                } else {
                    throw new Error('No page found')
                }
            })
            .catch((error) => alert(`Something went wrong while fetching users: ${error}`))
            .finally(() => console.log('Users have been fetched'))

    }

    const obtainUserByID = (id) => {
        getUserByID(id)
            .then((response) => {
                if (response.data.data && response.status === 200) {
                    alert(JSON.stringify(response.data.data))
                } else {
                    throw new Error('No user found')
                }
            })
            .catch((error) => alert(`Something went wrong while fetching users: ${error}`))
    }
    const createNewUser = (name, job) => {
        createUser(name, job)
            .then((response) => {
                if (response.data && response.status === 201) {
                    alert(JSON.stringify(response.data))
                } else {
                    throw new Error('User no created')
                }
            })
            .catch((error) => alert(`Something went wrong while creating user: ${error}`))
    }

    const updateUserByID = (id, name, job) => {
        updateUser(id, name, job)
            .then((response) => {
                if (response.data.data && response.status === 200) {
                    alert(JSON.stringify(response.data.data))
                } else {
                    throw new Error('User not updated')
                }
            })
            .catch((error) => alert(`Something went wrong while fetching users: ${error}`))
    }


    const deleteUserByID = (id) => {
        deleteUser(id)
            .then((response) => {
                if (response.data.data && response.status === 200) {
                    alert(`User with id: ${id} successfully deleted`)
                } else {
                    throw new Error('Can not delete user')
                }
            })
            .catch((error) => alert(`Something went wrong while fetching users: ${error}`))
    }
    return (
        <div>
            <h4>Login form</h4>
            <Formik
                //** Initial value that the form will take
                initialValues={initialCredentials}
                // *** Yup validation Schema
                validationSchema={loginSchema}
                // *** When click this function is executed
                onSubmit={async (values) => {
                    authUser(values)
                }}
            >
                {/* We obtain props from Formik */}
                {props => {
                    const {
                        values,
                        touched,
                        errors,
                        isSubmitting,
                        handleChange,
                        handleBlur
                    } = props
                    return (
                        <Form>
                            <label htmlFor="firstName">Email</label>
                            <Field id="email" type="email" name="email" placeholder="example@gmail.com" />
                            {/* Email errors */}
                            {
                                /* If exists error and also inpud is touched return message */
                                errors.email && touched.email &&
                                (
                                    <div className='error'>
                                        <p>{errors.email}</p>
                                    </div>
                                )
                            }
                            <label htmlFor="email">Password</label>
                            <Field id="password" name="password" placeholder="*****" type="password" />
                            {/* password errors */}
                            {
                                /* If exists error and also inpud is touched return message */
                                errors.password && touched.password &&
                                (
                                    <div className='error'>
                                        <p>{errors.password}</p>
                                    </div>
                                )
                            }
                            <button type="submit">Login</button>
                            {isSubmitting ? (<p>Login your credetials....</p>) : null}
                        </Form>
                    )
                }}
            </Formik>
            {/* Examples buttons to test API responses */}
            <div>
                <button onClick={obtainAllUsers}>Get all users with axios</button>
                <button onClick={() => obtainAllPagedUsers(1)}>Get all users (page 1) with axios</button>
                <button onClick={() => obtainUserByID(1)}>Get user by id with axios</button>
                <button onClick={() => createNewUser('Darwin', 'Desarrollador')}>Create user with axios</button>

                <button onClick={() => updateUserByID(1, 'Darwin', 'Estudiante')}>Update user with axios</button>
                <button onClick={() => deleteUserByID(1)}>Create user with axios</button>
            </div>
        </div>
    );
}

export default AxiosCRUDExample;
