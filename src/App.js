import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DssvPage from "./components/DssvPage/DssvPage";
import HomePage from "./components/HomePage/HomePage";
import Header from "./components/Header/Header";
import DemoHook from "./components/DemoHook/DemoHook";
import TaiXiuPage from "./components/TaiXiuPage/TaiXiuPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/dssv" element={<DssvPage />}></Route>
          <Route path="/hook" element={<DemoHook />}></Route>
          <Route path="/tai-xiu" element={<TaiXiuPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
