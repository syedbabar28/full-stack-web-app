import { Header } from "./components/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TodoListScreen } from "./screens/TodoListScreen";
import { AddTodoScreen } from "./screens/AddTodoScreen";
import { RegisterPage } from "./screens/auth/RegisterPage";
import { LoginPage } from "./screens/auth/LoginPage";
import { AuthProvider, useAuth } from "./data/AuthContext";
import { Navigate } from "react-router-dom";
import { NoPageFound } from "./components/NoPageFound";

function App() {


  const AuthenticatedRoute = ({ children }) => {
    const auth = useAuth()

    let userDetails = auth.getUserDetailsFromCache()
    console.log(auth)

    if (userDetails !== null) {
      return children
    } else {
      return <Navigate to="/login" />
    }
  }

  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
        <Route path="/" element={
            <AuthenticatedRoute>
              <TodoListScreen />
            </AuthenticatedRoute>} />
          <Route path="/addTodo/:id" element={
            <AuthenticatedRoute>
              <AddTodoScreen />
            </AuthenticatedRoute>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<NoPageFound/>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
