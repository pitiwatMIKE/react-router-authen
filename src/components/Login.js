import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useAuth } from "../hook/ProviderAuth";

export default function Login() {
    const auth = useAuth();
    const history = useHistory()
    const location = useLocation()
    let {from} = location.state || {from : {pathname: "/protected"}}
    const login = ()=>{
        auth.signin(()=>{
            history.replace(from)
        })
    }
  return (
    <div>
      <p>You must log in to view the page at</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}
