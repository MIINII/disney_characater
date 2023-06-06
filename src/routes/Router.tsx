import { BrowserRouter, Route, Routes } from "react-router-dom";

// components
import Home from "./Home";
import Character from "./Character";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/character/:id" element={<Character />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
