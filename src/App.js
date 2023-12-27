import { Header } from "./components/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TodoListScreen } from "./screens/TodoListScreen";
import { AddTodoScreen } from "./screens/AddTodoScreen";
import { RegisterPage } from "./screens/auth/RegisterPage";
import { LoginPage } from "./screens/auth/LoginPage";


function App() {
  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/todoList" element={<TodoListScreen />} />
        <Route path="/addTodo/:id" element={<AddTodoScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
