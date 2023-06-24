import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./modules/Authcontext";
import SignUp from "./modules/SignUp";
import SignIn from "./modules/SignIn";
import ForgetPassword from "./modules/ForgetPassword";
import "./App.css";

function App(): JSX.Element {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
