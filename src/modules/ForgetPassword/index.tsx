import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export default function ForgetPassword(): JSX.Element {
  const navigate = useNavigate();
  const [emailId, setEmailId] = useState<string>("");

  const auth = getAuth();

  const forgetPasswordOnClick: React.MouseEventHandler<
    HTMLButtonElement
  > = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, emailId);
      navigate("/sign-in");
    } catch (error: any) {
      console.log("Reset password", error.message);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 d-flex align-items-center justify-content-center vh-100 w-100">
          <div className="border p-5">
            <h2>Forget Password</h2>
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
            </Form>
            <Button
              variant="warning"
              className="my-3 mx-2"
              onClick={forgetPasswordOnClick}
            >
              Reset password
            </Button>
            <div className="d-flex">
              <p>Back to login</p>
              <Link to="/sign-in" className="mx-2">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
