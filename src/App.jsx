import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import RegistrationForm from "./component/RegistrationForm";
import SuccessPage from "./component/SuccessPage";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/success" element={<SuccessPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
