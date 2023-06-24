import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { signInUser } from "../../firebase/firebase";

export default function SignIn(): JSX.Element {
  const navigate = useNavigate();
  const [emailId, setEmailId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = async (
    e
  ) => {
    e.preventDefault();
    try {
      const userCredential = await signInUser(emailId, password);
      if (userCredential) {
        navigate("/");
      }
    } catch (error: any) {
      console.log("User Sign In Failed", error.message);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 d-flex align-items-center justify-content-center vh-100 w-100">
          <div className="border p-5">
            <h2>Create new account</h2>
            <Form>
              <Form.Group className="my-3 mx-2">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  value={emailId}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEmailId(e.target.value)
                  }
                />
              </Form.Group>
              <Form.Group className="my-3 mx-2">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="********"
                  value={password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPassword(e.target.value)
                  }
                />
                <Link to="/forget-password" className="mr-auto">
                  Forget password
                </Link>
              </Form.Group>
            </Form>
            <Button
              variant="success"
              className="my-3 mx-2"
              onClick={handleSubmit}
            >
              Sign in
            </Button>
            <div className="d-flex">
              <p>Don't have account?</p>
              <Link to="/" className="mx-2">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
