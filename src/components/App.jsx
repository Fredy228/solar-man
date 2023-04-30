// import { lazy } from "react";
import { Routes, Route } from 'react-router-dom';
import { Home } from 'pages/Home/Home';
import Layout from './Layout/Layout';
import LayoutAdmin from './Layout/LayoutAdmin';
import { LoginAdmin } from 'pages/LoginAdmin/LoginAdmin';
import PrivateRoute from './Routes/PrivateRoute';
import RestrictedRoute from './Routes/RestrictedRoute';
import { AdminProfile } from 'pages/AdminProfile/AdminProfile';
import { StoreDB } from 'pages/StoreDB/StoreDB';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="*" element={'Not found 404'} />
      </Route>
      <Route path="/admin" element={<LayoutAdmin />}>
        <Route
          index
          element={
            <RestrictedRoute
              redirectTo="/admin/profile"
              component={LoginAdmin}
            />
          }
        />
        <Route
          path="profile"
          element={
            <PrivateRoute redirectTo="/admin" component={AdminProfile} />
          }
        />
        <Route
          path="database"
          element={
            <PrivateRoute redirectTo="/admin" component={StoreDB} />
          }
        />
      </Route>
    </Routes>
  );
};
