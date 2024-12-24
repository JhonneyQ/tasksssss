import React from "react";
import HeaderA from "../../../layouts/admin/header";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div>
      <HeaderA />
      <Outlet />
    </div>
  );
};

export default AdminLayout;
