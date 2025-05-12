import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import FormSection from "./components/FormSection/FormSection";
import AdminPanel from "./components/AdminPanel/AdminPanel";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<FormSection />} />
      <Route path="/admin" element={<AdminPanel />} />
    </Routes>
  );
};

export default App;
