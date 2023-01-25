import React, {useState, useEffect} from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';
import TaskForm from './taskForm';

const TaskListComponent = () => {

    const defaultTask1 = new Task('Example1', 'Description 1', true, LEVELS.NORMAL) 
    const defaultTask2 = new Task('Example2', 'Description 2', false, LEVELS.URGENT)
    const defaultTask3 = new Task('Example3', 'Description 3', false, LEVELS.BLOCKING)
    // State of the component
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    // Life cycle control of the component
    useEffect(() => {
        console.log('Task State has been modified')
        setLoading(false)
        return () => {
            console.log("TaskListComponent it's going to unmount...")
        };
    }, [tasks]);


    const changeCompleted = (id) =>{
        console.log('TODO: Cambiar estado de una tarea');
    }

    return (
        <div>
            <div className='col-12'>
            <div className='card'>
            {/* Card header (title) */}
                <div className='card-header'>
                    <h5>Your tasks:</h5>
                </div>
                {/* Card body (content)*/}
                <div className='card-body' data-mdb-perfect-scrollbar='true' style={ { position: 'relative', height: '400px'} }>
                    <table>
                        <thead>
                            <tr>
                                <th scope='col'>Title</th>
                                <th scope='col'>description</th>
                                <th scope='col'>Priority</th>
                                <th scope='col'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Iterar sobre una lista de tareas */}
                            {/* TODO: APLICAR UN FOR/MAP PARA RENDERIZAR UNA LISTA */}
                            {/* Se hace un mapeo de tasks */}
                            { tasks.map((task, index) =>{
                                    return(
                                        <TaskComponent 
                                            key={index} 
                                            task={task}>
                                        </TaskComponent>
                                    )
                                }) 
                            }

                        </tbody>
                    </table>
                </div>
                <TaskForm></TaskForm>

                <div className='card-footer'>

                </div>
            </div>
0
            </div>
            
        </div>
    );
};

export default TaskListComponent;
