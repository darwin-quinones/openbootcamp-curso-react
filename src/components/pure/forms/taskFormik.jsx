import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import { LEVELS } from '../../../models/levels.enum.js';


const initialValues = {
    name : '',
    description : '',
    completed: false,
    level: ''
}

const createTaskSchema = Yup.object().shape(
    {
        name: Yup.string()
            .required('Task name is require')
            .min(4, 'task name is too short'),
        description: Yup.string()
            .required('Task description is required')
            .min(4, 'task description is too short'),
        level: Yup.string().required('Task level is required')
    }
)

const TaskFormik = () => {
    return (
        <div>
        <Formik
        initialValues={ initialValues }
        validationSchema={ createTaskSchema }
        
        onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 1000));
            alert(JSON.stringify(values, null, 2));
        }}
        >
        {   ({
                values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur
            }) =>(


                <div>
                    <div className='card'>
                    {/* Card header (title) */}
                        <div className='card-header'>
                            <h5>Create Your tasks:</h5>
                        </div>
                        {/* Card body (content)*/}
                        <div className='card-body' data-mdb-perfect-scrollbar='true' style={ { position: 'relative', height: '400px'} }>
                            <Form>
                                <div className='row'>
                                    <label className='form-label' htmlFor="name">Name</label>
                                    <Field id="name" type="text" name="name" className="form-control" placeholder="Task name" />
                                </div>
                                {/* name errors */}
                                {
                                    /* If exists error and also inpud is touched return message */
                                    errors.name && touched.name && 
                                    (                                  
                                        <ErrorMessage name="name" className='col-sm-12 text-danger' role="alert" component='div'/>           
                                    )
                                }<br/>
                               
                                <div className='row'>
                                    <label className='form-label' htmlFor="description">Description</label>
                                    <Field id="description" type="text" name="description" className="form-control" placeholder="Task description" />
                                    
                                </div>
                                {/* Description errors */}
                                {
                                    /* If exists error and also inpud is touched return message */
                                    errors.description && touched.description && 
                                    (                                  
                                        <ErrorMessage name="description" className='col-sm-12 text-danger' role="alert" component='div'/>           
                                    )
                                }<br/>
                               
                                <div className='row'>
                                    <Field as="select" className="form-control" name="level">
                                        <option value="">-Select-</option>
                                        <option value={`${ LEVELS.NORMAL }`}>Normal</option>
                                        <option value={`${ LEVELS.URGENT }`}>Urgent</option>
                                        <option value={`${ LEVELS.BLOCKING }`}>Blocking</option>
                                    </Field>
                                </div>
                                {/* Priority Level errors */}
                                {
                                    errors.level && touched.level && 
                                    (
                                        <ErrorMessage className="col-sm-12 text-danger" role="alert" name="level" component='div'></ErrorMessage>
                                    )
                                }<br/>
                               
                                <div className="col-auto">
                                    <button className='btn btn-success' type="submit">Create task</button>
                                </div>
                                {isSubmitting ? (<p>Creating task....</p>): null}
                            </Form>
                        </div>

                        <div className='card-footer'>

                        </div>
                    </div>
                </div>
                
            )
        }

        </Formik>

            
        </div>
    );
}

export default TaskFormik;
