import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "../../firebase/firebase";

export default function SignUp(): JSX.Element {
  const navigate = useNavigate();
  const [emailId, setEmailId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSignUpSubmit: React.MouseEventHandler<HTMLButtonElement> = async (
    e
  ) => {
    e.preventDefault();

    try {
      const userDetails = await createUser(emailId, password);

      if (userDetails) {
        navigate("/sign-in");
      }
    } catch (error: any) {
      console.log("Create user failed", error.message);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 d-flex align-items-center justify-content-center vh-100 w-100">
          <div className="border p-5">
            <h2>Create new account</h2>
            <Form>
              <Form.Group className="my-3 px-2">
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
              <Form.Group className="my-3 px-2">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="********"
                  value={password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPassword(e.target.value)
                  }
                />
              </Form.Group>
            </Form>
            <Button
              variant="primary"
              className="my-3 mx-2"
              onClick={handleSignUpSubmit}
            >
              Sign up
            </Button>
            <div className="d-flex">
              <p>Already have account?</p>
              <Link to="/sign-in" className="mx-2">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
