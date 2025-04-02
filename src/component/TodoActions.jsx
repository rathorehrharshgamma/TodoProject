import React from "react";
import { Box, Button } from "@mui/material";

function TodoActions({ onDeleteDoneTasks, onDeleteAllTasks, filter, onDeleteTodoTasks }) {
  return (
    <Box className="flex gap-2 mt-4">
      {filter == "done" && (
        <Button
          variant="contained"
          color="error"
          onClick={onDeleteDoneTasks}
          className="flex-1"
          sx={{
            backgroundColor: "#e63946",
            "&:hover": { backgroundColor: "#d62828" },
          }}
        >
          Delete done tasks
        </Button>
      )}

      {filter == "all" && (
        <Button
          variant="contained"
          color="error"
          onClick={onDeleteAllTasks}
          className="flex-1"
          sx={{
            backgroundColor: "#e63946",
            "&:hover": { backgroundColor: "#d62828" },
          }}
        >
          Delete all tasks
        </Button>
      )}

      {filter == "todo" && (
  
          <Button
            variant="contained"
            color="error"
            onClick={onDeleteTodoTasks}
            className="flex-1"
            sx={{
              backgroundColor: "#e63946",
              "&:hover": { backgroundColor: "#d62828" },
            }}
          >
            Delete Todo Tasks
          </Button>
      )}
    </Box>
  );
}

export default TodoActions;
