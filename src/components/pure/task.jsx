import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';

//* Models
//* Importamos los estilos de task.scss
import '../../styles/task.css'
import { LEVELS } from '../../models/levels.enum';



const TaskComponent = ({ task, complete, remove}) => {

    //make control of the changes
    useEffect(() => {
        console.log('Created task')
        return() =>{
            console.log(`Task: ${task.name} is going to unmount`)
        }
    }, [task]);


    /**
     * @Function that returns a Badge dependinf og the task
     */

    function taskLevelBadge(){
        switch (task.level) {
            case LEVELS.NORMAL:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-primary'>
                            {task.level}
                        </span>
                    </h6>
                )
        
            case LEVELS.URGENT:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-warning'>
                            {task.level}
                        </span>
                    </h6>
                )
            
            case LEVELS.BLOCKING:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-danger'>
                            {task.level}
                        </span>
                    </h6>
                )
            
            default:
                break;
        }
    }


    /**
     * 
     * @returns icons depending on completion of task
     */
    function taskCompletedIcon(){
        if(task.completed){
            return(<i onClick={() => complete(task)} className='bi bi-toggle-on task-action ' style={{color: 'green', fontSize: '25px'}}></i>)
        }else{
            return(<i onClick={() => complete(task)} className='bi bi-toggle-off task-action' style={{color:'grey', fontSize:'25px'}}></i>)
        }
    }

    const taskCompleted = {
        color: 'Gray',
        fontWeight: 'bold',
        textDecoration: 'line-through',
    }

    const taskPending = {
        color: 'tomato',
        fontWeight: 'bold'
    }

    return (

        // <tr className={`fw-normal ${task.completed ? 'task-completed' : 'task-pending'}`} >
        <tr className="fw-normal" style={task.completed ? taskCompleted : taskPending}>
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>
            <td>
                <span className='align-middle'>{task.description}</span>
            </td>
            <td>
                {/* Execution of function that returns a badge element */}
                <span className='align-middle'>{taskLevelBadge()}</span>
            </td>
            <td>
                {/* Excution of function to return icon depending on completion */}
                {taskCompletedIcon()}
                <i className='bi bi-trash task-action' onClick={() => remove(task)} style={{color: 'tomato', fontSize: '20px'}}></i>
                {/* <span className=''>{task.completed ? 'completed' : 'pending'}</span> */}
            </td>
        </tr>


        // <div>
        //     <h2 className='task-name'>Nombre: { task.name }</h2>
        //     <h3>Descripción: { task.description }</h3>
        //     <h4>Level: { task.level }</h4>
        //     <h5>This task is: { task.completed ? 'COMPLETED' : 'PENDING' }</h5>
        // </div>

    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default TaskComponent;
