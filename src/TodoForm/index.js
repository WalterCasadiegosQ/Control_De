import React from "react";
import "./TodoForm.css"
import { TodoContext } from "../TodoContext";

function TodoForm() {
    const {setOpenModal, addTodo} = React.useContext(TodoContext);

    const [newTodoValue, setNewTodovValue] = React.useState("");

    const onSubmit = (event)=>{
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false)
    };

    const onCancel = (event)=>{
        setOpenModal(false)
    };

    const onChange = (event)=>{
        setNewTodovValue(event.target.value)
    };
    

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                placeholder="Cortar cebolla"
                value={newTodoValue}
                onChange={onChange}
            ></textarea>

            <div className="TodoForm-buttonContainer">
                <button className="TodoForm-button TodoForm-button--cancel" onClick={onCancel}>CANCELAR</button>
                <button className="TodoForm-button TodoForm-button--add">AÑADIR</button>
            </div>
        </form>
    );
}

export default TodoForm;