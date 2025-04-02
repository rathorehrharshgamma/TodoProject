import React from 'react';
import { Box, Typography, IconButton, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function TodoItem({ todo, onToggleComplete, onDelete, onEdit }) {
  const handleEdit = () => {
    const newText = 
    // <input type='text' value={todo.text}/>
    prompt('Edit todo:', todo.text);
    if (newText !== null) onEdit(todo.id, newText);
  };

  return (
    <Box 
      className="border border-gray-300 rounded p-4 mb-2 flex items-center justify-between"
    >
      <Box className="flex items-center flex-grow">
        
        <Typography 
          className={todo.completed ? 'line-through text-red-500' : ''}
        >
          {todo.text}
        </Typography>
      </Box>
      
      <Box>
      <Checkbox
          checked={todo.completed}
          onChange={() => onToggleComplete(todo.id)}
          color="secondary"
        />
        <IconButton 
          onClick={handleEdit}
          // color="primary"
        >
          <EditIcon className="text-yellow-500" />
        </IconButton>
        
        <IconButton 
          onClick={() => onDelete(todo.id)}
          color="error"
        >
          <DeleteIcon className="text-red-500" />
        </IconButton>
      </Box>
    </Box>
  );
}

export default TodoItem;