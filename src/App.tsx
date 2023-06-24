import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./modules/AuthContext";
import SignUp from "./modules/SignUp";
import SignIn from "./modules/SignIn";
import ForgetPassword from "./modules/ForgetPassword";
import Profile from "./modules/Profile";
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
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
