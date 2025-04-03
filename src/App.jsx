import React, { useState } from "react";
import { Container } from "@mui/material";
import TodoFilters from "./component/TodoFilter";
import TodoList from "./component/TodoList";
import TodoInput from "./component/TodoInput";
import { v4 as uuidv4 } from "uuid";
import { toast, ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [todos, setTodos] = useState([]);

  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("all"); // 'all', 'done', 'todo'

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      const newTodo = {
        id: uuidv4(),
        text: inputValue,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputValue("");
    }
  };

  const handleToggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    // toast.success("Deleted Successfully")
    toast.success("Deleted Task Successfully", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleEditTodo = (id, newText) => {
    if (newText.trim() !== "") {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, text: newText } : todo
        )
      );
    }
  };

  const handleDeleteDoneTasks = () => {
    setTodos(todos.filter((todo) => !todo.completed));
    toast.success("Deleted Done Task Successfully", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    // console.log("Deleted");
  };

  const handleDeleteAllTasks = () => {
    setTodos([]);
    toast.success("Deleted All Task Successfully", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    // console.log("Deleted");
  };

  const handleDeleteTodoTasks = () => {
    setTodos(todos.filter((prev) => prev.completed));
    toast.success("Deleted Todo Task Successfully", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    // console.log("Deleted");
  };

  return (
    <>
      <Container maxWidth="sm" className="py-8">
        <TodoInput
          inputValue={inputValue}
          onInputChange={handleInputChange}
          onAddTodo={handleAddTodo}
        />

        <TodoFilters filter={filter} onFilterChange={setFilter} />

        <TodoList
          todos={todos}
          filter={filter}
          onToggleComplete={handleToggleComplete}
          onDeleteTodo={handleDeleteTodo}
          onEditTodo={handleEditTodo}
          onDeleteDoneTasks={handleDeleteDoneTasks}
          onDeleteAllTasks={handleDeleteAllTasks}
          onDeleteTodoTasks={handleDeleteTodoTasks}
        />
      </Container>

      <ToastContainer />
    </>
  );
}

export default App;
