import React, {useState, useEffect} from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL)
    // State of the component
    const [tasks, setTasks] = useState(defaultTask);
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
            <div>
                <h1>Your tasks:</h1>

                {/* TODO: APLICAR UN FOR/MAP PARA RENDERIZAR UNA LISTA */}

                <TaskComponent task={defaultTask}></TaskComponent>
            </div>
            
        </div>
    );
};

export default TaskListComponent;
