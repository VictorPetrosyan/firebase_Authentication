import React, { useState } from "react";

function Form({ title, handleClick }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    width: "300px",
    margin: "50px auto",
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
    padding: "20px",
    borderRadius: "8px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  };

  const inputStyle = {
    padding: "12px",
    margin: "10px 0",
    border: "1px solid #dddfe2",
    borderRadius: "6px",
    fontSize: "16px",
    outline: "none",
    backgroundColor: "#f5f6f7",
  };

  const buttonStyle = {
    padding: "12px",
    border: "none",
    borderRadius: "6px",
    backgroundColor: "#1877f2",
    color: "#fff",
    cursor: "pointer",
    fontSize: "16px",
    marginTop: "10px",
  };

  const buttonHover = {
    backgroundColor: "#165ee7",
  };

  return (
    <div style={formStyle}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        style={inputStyle}
      />
      <input
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="Password"
        style={inputStyle}
      />
      <button
        onClick={() => handleClick(email, pass)}
        style={buttonStyle}
        onMouseOver={(e) => (e.target.style.backgroundColor = buttonHover.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
      >
        {title}
      </button>
    </div>
  );
}

export { Form };
