import React from 'react';
import { Box, Button } from '@mui/material';

function TodoActions({ onDeleteDoneTasks, onDeleteAllTasks }) {
  return (
    <Box className="flex gap-2 mt-4">
      <Button
        variant="contained"
        color="error"
        onClick={onDeleteDoneTasks}
        className="flex-1"
        sx={{ backgroundColor: '#e63946', '&:hover': { backgroundColor: '#d62828' } }}
      >
        Delete done tasks
      </Button>
      
      <Button
        variant="contained"
        color="error"
        onClick={onDeleteAllTasks}
        className="flex-1"
        sx={{ backgroundColor: '#e63946', '&:hover': { backgroundColor: '#d62828' } }}
      >
        Delete all tasks
      </Button>
    </Box>
  );
}

export default TodoActions;