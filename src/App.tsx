import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Article from "./components/Article/Article";
import Works from "./components/Works/Works";
import NotFound from "./components/Notfound/Notfound";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/about/`} element={<About />} />
        <Route path={`/works/`} element={<Works />} />
        <Route path={`/article/`} element={<Article />} />
        <Route path={`*`} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
