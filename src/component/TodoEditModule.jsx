import React, { useState } from "react";
import { Modal, Box, TextField, Button, Typography } from "@mui/material";
function TodoEditModule({ open, onClose, todo, onSave }) {
  const [editedText, setEditedText] = useState(todo.text);
  const handleSave = () => {
    onSave(todo.id, editedText);
    onClose();
  };
  return (
    <Modal open={open} onClose={onClose}>
      <Box className="w-[550px]  bg-white p-6 rounded-md shadow-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Typography
          variant="h6"
          className="mb-4 text-center text-2xl font-bold"
        >
          Edit Todo
        </Typography>
        <TextField
          fullWidth
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        />
        <Box className="flex justify-evenly mt-4">
          <Button onClick={onClose} className="mr-2" variant="outlined">
            Cancel
          </Button>
          <Button onClick={handleSave} variant="contained" color="primary">
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
export default TodoEditModule;
