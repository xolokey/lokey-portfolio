import React from "react";

export default function Contact() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(to right, #f8f9fa, #e9ecef)",
      padding: "3rem 1.5rem",
      fontFamily: "'Inter', sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <h1 style={{
        fontSize: "3rem",
        fontWeight: "bold",
        marginBottom: "2rem",
        background: "linear-gradient(45deg, #20c997, #17a2b8)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
      }}>
        Get in Touch
      </h1>

      <form style={{
        background: "white",
        padding: "2rem",
        borderRadius: "1rem",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "100%",
        maxWidth: "500px"
      }}>
        <input type="text" placeholder="Your Name" required
          style={{
            padding: "0.75rem",
            borderRadius: "0.5rem",
            border: "1px solid #dee2e6",
            outline: "none"
          }}
        />
        <input type="email" placeholder="Your Email" required
          style={{
            padding: "0.75rem",
            borderRadius: "0.5rem",
            border: "1px solid #dee2e6",
            outline: "none"
          }}
        />
        <textarea placeholder="Your Message" rows="5"
          style={{
            padding: "0.75rem",
            borderRadius: "0.5rem",
            border: "1px solid #dee2e6",
            outline: "none"
          }}
        ></textarea>
        <button type="submit"
          style={{
            padding: "0.75rem",
            borderRadius: "0.5rem",
            border: "none",
            background: "#20c997",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "background 0.3s"
          }}
          onMouseEnter={e => e.currentTarget.style.background = "#198754"}
          onMouseLeave={e => e.currentTarget.style.background = "#20c997"}
        >
          Send Message
        </button>
      </form>

      <p style={{ marginTop: "1rem", color: "#6c757d" }}>
        Or reach out directly: <a href="mailto:lokesh@example.com" style={{ color: "#20c997" }}>lokesh@example.com</a>
      </p>
    </div>
  );
}
