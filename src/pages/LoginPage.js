import React from "react";
import { Link, Navigate } from "react-router-dom";
import { Login } from "../components/Login";
import { useAuth } from "../hooks/useAuth";

function LoginPage() {
    const { isAuth } = useAuth();

    if (isAuth) {
        return <Navigate to="/" />;
    }

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Login</h1>
            <Login />
            <p style={styles.registerPrompt}>
                Or <Link to="/register" style={styles.link}>Register</Link>
            </p>
        </div>
    );
}

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f0f2f5", 
        color: "#333", 
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        textAlign: "center",
    },
    title: {
        fontSize: "28px",
        marginBottom: "20px",
        color: "#1877f2", 
    },
    registerPrompt: {
        marginTop: "20px",
        fontSize: "16px",
        color: "#555", 
    },
    link: {
        color: "#1877f2", 
        textDecoration: "none",
    },
};

export default LoginPage;
