import { Header } from "./components/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TodoListScreen } from "./screens/TodoListScreen";
import { AddTodoScreen } from "./screens/AddTodoScreen";
import { RegisterPage } from "./screens/auth/RegisterPage";


function App() {
  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/TodoList" element={<TodoListScreen />} />
        <Route path="/AddTodo/:id" element={<AddTodoScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
