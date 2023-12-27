import { Header } from "./components/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TodoListScreen } from "./screens/TodoListScreen";
import { AddTodoScreen } from "./screens/AddTodoScreen";
import { RegisterPage } from "./screens/auth/RegisterPage";
import { LoginPage } from "./screens/auth/LoginPage";
import { AuthProvider } from "./data/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/todoList" element={<TodoListScreen />} />
          <Route path="/addTodo/:id" element={<AddTodoScreen />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
