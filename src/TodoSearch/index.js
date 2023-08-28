import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContext';

function TodoSearch(){
  const {setSearchValue, searchValue} = React.useContext(TodoContext);
    return (
          <input 
          className="TodoSearch" 
          placeholder="Buscar"
          value={searchValue}
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
        />
    );
  }

  export default TodoSearch;