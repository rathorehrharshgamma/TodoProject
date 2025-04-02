import React from 'react';
import TodoItem from './TodoItem'
import TodoActions from './TodoActions';

function TodoList({ 
  todos, 
  filter, 
  onToggleComplete, 
  onDeleteTodo, 
  onEditTodo,
  onDeleteDoneTasks,
  onDeleteAllTasks
}) {
  const filteredTodos = todos.filter(todo => {
    if (filter === 'done') return todo.completed;
    if (filter === 'todo') return !todo.completed;
    return true;
  });

  return (
    <>
     
      {filteredTodos.map((todo,index) => (
        
        <TodoItem 
             
          key={todo.id || index} 
          todo={todo} 
          onToggleComplete={onToggleComplete}
          onDelete={onDeleteTodo}
          onEdit={onEditTodo}
        />
        
        
        
      ))}
      
      <TodoActions 
        filter={filter}
        onDeleteDoneTasks={onDeleteDoneTasks} 
        onDeleteAllTasks={onDeleteAllTasks} 
      />
    </>
  );
}

export default TodoList;