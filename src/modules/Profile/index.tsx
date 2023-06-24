import { useContext } from "react";
import { Button } from "react-bootstrap";
import { AuthContext } from "../AuthContext";
import "./styles.css";

function Profile() {
  const { currentUser, signOut } = useContext(AuthContext);

  return (
    /**
     * Extract the currrentUser from the context, if you want to
     * get the User info, like the email, display name, etc.
     */
    <div className="container-fluid">
      <div className="row">
        <div className="d-flex profile my-3">
            <div>
                <h3>Welcome! {currentUser?.email}</h3>
                <p>Sign In Status: {currentUser && "active"}</p>
            </div>
          <Button className="button" onClick={signOut}>Sign Out</Button>
        </div>
      </div>
    </div>
  );
}
export default Profile;
