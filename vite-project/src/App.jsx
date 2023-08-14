import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/*" element={<HomePage />} />
        <Route exact path="/chatpage" element={<ChatPage />} />
      </Routes>
    </>
  );
};

export default App;
