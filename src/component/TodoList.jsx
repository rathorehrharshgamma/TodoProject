import React from 'react';
import TodoItem from './TodoItem'
import TodoActions from './TodoActions';
import { Typography,Box } from '@mui/material';

function TodoList({ 
  todos, 
  filter, 
  onToggleComplete, 
  onDeleteTodo, 
  onEditTodo,
  onDeleteDoneTasks,
  onDeleteAllTasks,
  onDeleteTodoTasks
}) {
  const filteredTodos = todos.filter(todo => {
    if (filter === 'done') return todo.completed;
    if (filter === 'todo') return !todo.completed;
    return true;
  });

  return (
    <>
     
      {filteredTodos.length === 0 ? (
      <Box className="text-center p-4">
        <Typography variant='h6' color='textSecondary'>
          No Task Available
        </Typography>
      </Box>)
      :

      filteredTodos.map((todo,index) => (
        
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
        onDeleteTodoTasks={onDeleteTodoTasks} 
        todoLength = {filteredTodos.length}
      />
    </>
  );
}

export default TodoList;