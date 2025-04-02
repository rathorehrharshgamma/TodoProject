import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import ListAltIcon from '@mui/icons-material/ListAlt';

function TodoInput({ inputValue, onInputChange, onAddTodo }) {
    
  return (
    <>
    {/* /** This is using for TodoInput */}
      <Typography 
        variant="h4" 
        component="h1" 
        className="text-center font-medium mb-4"
      >
        TodoInput
      </Typography>
      
      <Box className="border border-gray-300 rounded p-4 mb-8">
        <Box className="flex mb-4">
          <Box className="bg-teal-500 text-white p-2 flex items-center justify-center mr-2">
            <ListAltIcon />
          </Box>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="New Todo"
            value={inputValue}
            onChange={onInputChange}
            className="flex-grow"
          />
        </Box>
        
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={onAddTodo}
          className="bg-teal-500 hover:bg-teal-600"
          sx={{ backgroundColor: 'rgb(20, 184, 166)', '&:hover': { backgroundColor: 'rgb(13, 148, 136)' } }}
        >
          Add new task
        </Button>
      </Box>
    </>
  );
}

export default TodoInput;