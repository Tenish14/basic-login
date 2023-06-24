import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./modules/SignUp";
import SignIn from "./modules/SignIn";
import ForgetPassword from "./modules/ForgetPassword";
import "./App.css";

function App(): JSX.Element {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
