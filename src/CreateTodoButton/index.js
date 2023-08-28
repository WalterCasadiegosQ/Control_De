import React from 'react';
import './CreateReactButton.css'
import { TodoContext } from '../TodoContext';

function CreateTodoButton(){
    const {openModal, setOpenModal} = React.useContext(TodoContext);
    return(
        <button className="CreateReactButton" onClick={() => setOpenModal(!openModal)}>+</button>
    );
}

export default CreateTodoButton;