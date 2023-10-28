import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import LoginPage from "./pages/LoginPage";
import RegisterPage from './pages/RegisterPage';
import TasksPage from "./pages/TasksPage";
import TasksFormPage from "./pages/TasksFormPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";

import ProtectedRoute from "./ProtectedRoute";
import { TasksProvider } from "./context/TasksContext";
import NavBar from "./components/NavBar";

function App() {
  return (
    <AuthProvider>
      <TasksProvider>
        <BrowserRouter>
          <main className="container mx-auto px-10">
            <NavBar />
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/register' element={<RegisterPage />} />

              <Route element={<ProtectedRoute />}>
                <Route path='/tasks' element={<TasksPage />} />
                <Route path='/add-task' element={<TasksFormPage />} />
                <Route path='/tasks/:id' element={<TasksFormPage />} />
                <Route path='/profile' element={<ProfilePage />} />
              </Route>
            </Routes>
          </main>
        </BrowserRouter>
      </TasksProvider>
    </AuthProvider>
  )
}

export default App