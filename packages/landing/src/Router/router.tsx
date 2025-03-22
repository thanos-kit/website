import {BrowserRouter, Route, Routes} from "react-router-dom";
import LandingPage from "../pages/landing";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  )
}