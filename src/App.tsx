import React from "react";

import "./App.css";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import { useAppSelector } from "./redux/hooks";
import { selectUser } from "./redux/reducers/userReducer";
import ThemeProvider from "./ThemeProvider";
import ProtectedRoute from "./routes/ProtectedRoute";
import Users from "./pages/dashboard/components/Users/Users";
import Products from "./pages/dashboard/components/Products";

function App() {
  const user = useAppSelector(selectUser);

  return (
    <React.StrictMode>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="login" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute user={user}>
                  <Dashboard />
                </ProtectedRoute>
              }
            >
              <Route path="users" element={<Users />} />
              <Route path="products" element={<Products />} />
              <Route path="*" element={<Navigate to="/dashboard/users" />} />
            </Route>
            <Route path="*" element={<Navigate to="/dashboard/users" />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
