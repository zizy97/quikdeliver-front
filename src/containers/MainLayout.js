import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components/Layout";

export default function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
