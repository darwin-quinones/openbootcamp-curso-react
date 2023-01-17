import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL)
    const changeState = (id) =>{

        console.log('Cambiar estado de una tarea');
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
