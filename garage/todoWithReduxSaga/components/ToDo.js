import React from 'react';
import style from './ToDo.module.css';

const ToDo = ({todo, handleToggle}) => {

    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

    return (
        <div  id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} onClick={handleClick}
             className={todo.complete ? "todo strike" : "todo"}>
            {todo.task}

            <style jsx>{`
              .strike {text-decoration: line-through;}
          `}</style>

        </div>
    );
};

export default ToDo;