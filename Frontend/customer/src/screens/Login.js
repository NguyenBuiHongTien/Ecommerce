import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Header from "../components/Header";
import Message from "../components/LoadingError/Error";
import Loading from "../components/LoadingError/Loading";
import { login, loginWithGoogle } from "../redux/Actions/UserActions";
import { GoogleLogin } from "@react-oauth/google";

const Login = ({ location }) => {
  window.scrollTo(0, 0);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();
  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [userInfo, history, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  const responseGoogle = (response) => {
    if (response.credential) {
      dispatch(loginWithGoogle(response.credential));
    }
  };

  return (
    <>
      <Header />
      <div className="container d-flex flex-column justify-content-center align-items-center login-center">
        {error && <Message variant="alert-danger">{error}</Message>}
        {loading && <Loading />}
        <form className="Login col-md-8 col-lg-4 col-11" onSubmit={submitHandler}>
          <input
            type="email"
            className="form-control mb-3"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="form-control mb-3"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn btn-primary w-100 mb-3" type="submit">
            Login
          </button>
          <p>
            <Link to={redirect ? `/register?redirect=${redirect}` : "/register"}>
              Create Account
            </Link>
          </p>
        </form>

        {/* Google login button */}
        <GoogleLogin
          onSuccess={responseGoogle}
          onError={() => console.log("Login Failed")}
          useOneTap
          shape="pill"
          render={(renderProps) => (
            <button
              className="google-login-button"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              <i className="fa fa-google"></i> {/* Biểu tượng Google */}
              Login with Google
            </button>
          )}
        />
      </div>
    </>
  );
};

export default Login;
