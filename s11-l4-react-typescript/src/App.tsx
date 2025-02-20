import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ArticleDetail from "./components/ArticleDetail";
import Homepage from "./components/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
