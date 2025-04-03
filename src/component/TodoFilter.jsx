import React from "react";
import { ButtonGroup, Button, Typography } from "@mui/material";
import { ToastContainer } from "react-toast";

function TodoFilters({ filter, onFilterChange }) {
  return (
    <>
      <Typography
        variant="h4"
        component="h2"
        className="text-center font-medium mb-4"
      >
        TodoList
      </Typography>

      <ButtonGroup fullWidth className="mb-4 mt-4">
        <ToastContainer />
        <Button
          variant={filter === "all" ? "contained" : "outlined"}
          onClick={() => onFilterChange("all")}
          className={filter === "all" ? "bg-teal-500" : ""}
          sx={
            filter === "all"
              ? {
                  backgroundColor: "rgb(20, 184, 166)",
                  "&:hover": { backgroundColor: "rgb(13, 148, 136)" },
                }
              : {}
          }
        >
          All
        </Button>
        <Button
          variant={filter === "done" ? "contained" : "outlined"}
          onClick={() => onFilterChange("done")}
          className={filter === "done" ? "bg-teal-500" : ""}
          sx={
            filter === "done"
              ? {
                  backgroundColor: "rgb(20, 184, 166)",
                  "&:hover": { backgroundColor: "rgb(13, 148, 136)" },
                }
              : {}
          }
        >
          Done
        </Button>
        <Button
          variant={filter === "todo" ? "contained" : "outlined"}
          onClick={() => onFilterChange("todo")}
          className={filter === "todo" ? "bg-teal-500" : ""}
          sx={
            filter === "todo"
              ? {
                  backgroundColor: "rgb(20, 184, 166)",
                  "&:hover": { backgroundColor: "rgb(13, 148, 136)" },
                }
              : {}
          }
        >
          Todo
        </Button>
      </ButtonGroup>
    </>
  );
}

export default TodoFilters;
