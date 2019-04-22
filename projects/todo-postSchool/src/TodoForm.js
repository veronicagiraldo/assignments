import React from 'react';

const TodoForm =() =>{
  return(
    <form>
      <input
            type="text"
            name="todo"
            placeholder="add todo"
            value={this.todo}>
      </input>
    </form>
  )
}