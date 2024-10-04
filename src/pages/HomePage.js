import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
import { removeUser } from "../store/slices/userSlice";
import { useDispatch } from "react-redux";

function HomePage() {
    const { isAuth, email, emailVerified } = useAuth();
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(removeUser());
    };
    console.log(emailVerified)

    return isAuth ? (
        <div style={styles.container}>
            <h1 style={styles.title}>Welcome to Your Home Page!</h1>
            <p style={styles.greeting}>Hello, {email}!</p>
            <p style={styles.description}>
                Verified: {emailVerified ? "verified" : "not verified"}
            </p>
            <button
                onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
                onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
                style={styles.button} onClick={handleLogout}>
                Logout
            </button>
        </div>
    ) : (
        <Navigate to={'/login'} />
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
        margin: "20px 0",
        color: "#1877f2", 
    },
    greeting: {
        fontSize: "20px",
        margin: "10px 0",
    },
    description: {
        fontSize: "16px",
        color: "#555", 
    },
    button: {
        backgroundColor: "#1877f2", 
        color: "#ffffff",
        border: "none",
        borderRadius: "5px",
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
        marginTop: "20px",
    },
    buttonHover: {
        backgroundColor: "#165ee7",
    }
};

export default HomePage;
