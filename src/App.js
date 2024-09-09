import React from "react";
import { GlobalProvider } from "./context/GlobalContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutClient from "./layout/LayoutClient";
import LayoutAdmin from "./layout/LayoutAdmin";
import Home from "./pages/client/Home";
import Job from "./pages/client/Job";
import Login from "./pages/client/Login";
import Register from "./pages/client/Register";
import Dashboard from "./pages/admin/Dashboard";
import JobTableList from "./pages/admin/JobTableList";
import AddNewJob from "./pages/admin/AddNewJob";
import Profile from "./pages/admin/Profile";
import ChangePassword from "./pages/admin/ChangePassword";
import JobDetail from "./pages/client/JobDetail";
import NotFound from "./component/404NotFound";
import OnlyAdmin from "./component/OnlyAdmin";

import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

function App() {
  //Ketika belum login tidak bisa akses dashboard
  const LoginRoute = (props) => {
    if (Cookies.get("token") === undefined) {
      return <Navigate to={"/onlyAdmin"} />;
    } else if (Cookies.get("token") !== undefined) {
      return props.children;
    }
  };

  //Ketika sudah login tidak bisa masuk ke halaman login kembali
  const LoginRoute2 = (props) => {
    if (Cookies.get("token") !== undefined) {
      return <Navigate to={"/"} />;
    } else if (Cookies.get("token") === undefined) {
      return props.children;
    }
  };

  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          <Route
            path="*"
            element={
              <LayoutClient>
                <NotFound />
              </LayoutClient>
            }
          />

          <Route
            path="/"
            element={
              <LayoutClient>
                <Home />
              </LayoutClient>
            }
          />

          <Route
            path="/login"
            element={
              <LayoutClient>
                <LoginRoute2>
                  <Login />
                </LoginRoute2>
              </LayoutClient>
            }
          />

          <Route
            path="/register"
            element={
              <LayoutClient>
                <Register />
              </LayoutClient>
            }
          />
          <Route
            path="/job-vacancy"
            element={
              <LayoutClient>
                <Job />
              </LayoutClient>
            }
          />

          <Route
            path="/job-vacancy/:idData"
            element={
              <LayoutClient>
                <JobDetail />
              </LayoutClient>
            }
          />

          <Route
            path="/onlyAdmin"
            element={
              <LayoutClient>
                <OnlyAdmin />
              </LayoutClient>
            }
          />

          <Route
            path="/dashboard"
            element={
              <LayoutAdmin>
                <LoginRoute>
                  <Dashboard />
                </LoginRoute>
              </LayoutAdmin>
            }
          />

          <Route
            path="/dashboard/list-job-vacancy"
            element={
              <LayoutAdmin>
                <JobTableList />
              </LayoutAdmin>
            }
          />

          <Route
            path="/dashboard/list-job-vacancy/edit/:idData"
            element={
              <LayoutAdmin>
                <AddNewJob />
              </LayoutAdmin>
            }
          />

          <Route
            path="/dashboard/list-job-vacancy/form"
            element={
              <LayoutAdmin>
                <AddNewJob />
              </LayoutAdmin>
            }
          />

          <Route
            path="/dashboard/reset-password"
            element={
              <LayoutAdmin>
                <ChangePassword />
              </LayoutAdmin>
            }
          />

          <Route
            path="/dashboard/profile"
            element={
              <LayoutAdmin>
                <Profile />
              </LayoutAdmin>
            }
          />
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
