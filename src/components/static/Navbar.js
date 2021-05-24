import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hook/ProviderAuth";

export default function Navbar() {
  const auth = useAuth();
  const logout = () => {
    auth.signout(() => console.log("logout"));
  };
  return (
    <ul>
      <li>
        <Link to="/public">Public Page</Link>
      </li>
      <li>
        <Link to="/protected">Protected Page</Link>
      </li>
      <li>
        {!auth.user ? (
          <Link to="/login">Login Page</Link>
        ) : (
          <Link to="/" onClick={logout}>
            Logout
          </Link>
        )}
      </li>
    </ul>
  );
}
