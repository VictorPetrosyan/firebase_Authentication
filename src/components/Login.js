import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword, browserLocalPersistence, } from "firebase/auth";
import { useDispatch } from "react-redux";
import { Form } from "./Form";
import { setUser } from "../store/slices/userSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleLogin(email, password) {
    setError("");

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    setLoading(true);

    const auth = getAuth();
    auth.setPersistence(browserLocalPersistence).then(
      () => signInWithEmailAndPassword(auth, email, password)
        .then(({ user }) => {
          dispatch(
            setUser({
              email: user.email,
              id: user.uid,
              token: user.accessToken,
              emailVerified: user.emailVerified
            })
          );
          navigate("/");
        })
        .catch((error) => {
          setLoading(false);
          setError(error.message);
          console.error("Login failed:", error.message);
        })
    )
  }

  return (
    <div style={styles.container}>
      {error && <p style={styles.error}>Invalid email or password</p>}
      <Form
        title={loading ? "Signing in..." : "Sign in"}
        handleClick={handleLogin}
        styles={styles}
      />
      {loading && <p style={styles.loading}>Loading...</p>}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
  },
  title: {
    fontSize: "24px",
    marginBottom: "20px",
    color: "#1877f2",
  },
  error: {
    color: "red",
    marginBottom: "10px",
  },
  loading: {
    marginTop: "10px",
  },
};

export { Login };
