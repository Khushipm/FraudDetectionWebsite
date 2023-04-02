import React from "react";

// components

import FooterAdmin from "../Footers/FooterAdmin";

import AdminNavbar from "../Navbars/AdminNavbar.js";
import Sidebar from "../Sidebar/Sidebar.js";
import HeaderStats from "../Headers/HeaderStats.js";
import Layout from "../Layout";

export default function Admin({ children, title, headerText }) {
  return (
    <Layout title={title}>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar title={title} />
        {/* Header */}
        <HeaderStats headerText={headerText} />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {children}
          <FooterAdmin />
        </div>
      </div>
    </Layout>
  );
}
