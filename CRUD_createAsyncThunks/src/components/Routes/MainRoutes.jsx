import React from "react";
import { Routes, Route } from "react-router-dom";
import Create from "../Create/Create";
import Read from "../Read/Read";
import Update from "../Update/Update";

function MainRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="/read" element={<Read />} />
        <Route path="/edit/:id" element={<Update />} />
      </Routes>
    </div>
  );
}

export default MainRoutes;
