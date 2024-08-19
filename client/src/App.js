import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Content from "./components/Content"
import Communication from "./components/Communication";


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route
          path="/content"
          element={<Content />}
        />
        <Route
          path="/communication"
          element={<Communication />}
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
