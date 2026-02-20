import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import GlobalHeader from "./components/GlobalHeader";
import GlobalFooter from "./components/GlobalFooter";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
    <ToastContainer 
        position="top-right"
        autoClose={2500}
        theme="light"
      />
    <BrowserRouter>

      <AppRouter />

    </BrowserRouter>
    </>
  );
}

export default App;