import React from "react";
import { Link, Navigate } from "react-router-dom";
import { SignUp } from "../components/SignUp";
import { useAuth } from "../hooks/useAuth";

function RegisterPage() {
    const { isAuth } = useAuth();

    if (isAuth) {
        return <Navigate to="/" />;
    }

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Register</h1>
            <SignUp />
            <p style={styles.loginPrompt}>
                Already have an account? <Link to="/login" style={styles.link}>Login</Link>
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
    loginPrompt: {
        marginTop: "20px",
        fontSize: "16px",
        color: "#555", 
    },
    link: {
        color: "#1877f2", 
        textDecoration: "none",
    },
};

export default RegisterPage;
