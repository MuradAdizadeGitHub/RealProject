import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home/Home";
import CombiMaster from "./pages/CombiMaster";
import CombiBrains from "./pages/CombiBrains";
import NoPage from "./pages/NoPage";
import ContactUs from "./pages/ContactUs";
import SaleOfParts from "./pages/SaleOfParts";
function App() {
  return <>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="combimaster" element={<CombiMaster />} />
          <Route path="combibrains" element={<CombiBrains />} />
          <Route path="salesofparts" element={<SaleOfParts />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
}

export default App;
