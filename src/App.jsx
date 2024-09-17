import { Routes, Route } from "react-router-dom";
import { Header } from "./Header";
import { Home } from "./Home";

export function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
