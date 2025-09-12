import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Mavrick - Enterprise Web Applications",
      desc: "Enterprise web apps built with .NET Core, React, SQL Server, and REST APIs.",
      link: "#",
      github: "#",
      icon: "🏢"
    },
    {
      title: "AgriView",
      desc: "AI-powered agricultural analytics platform with data visualization.",
      link: "https://agriview.onrender.com",
      github: "https://github.com/xolokey/AgriView",
      icon: "🌾"
    },
    {
      title: "LUXE - E-commerce",
      desc: "Modern e-commerce platform for luxury fashion.",
      link: "https://luxe-shopping.vercel.app",
      github: "https://github.com/xolokey/v0-LUXE",
      icon: "💎"
    }
  ];

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(to right, #e0eafc, #cfdef3)",
      padding: "3rem 1.5rem",
      fontFamily: "'Inter', sans-serif"
    }}>
      <h1 style={{
        textAlign: "center",
        fontSize: "3rem",
        fontWeight: "bold",
        marginBottom: "2rem",
        background: "linear-gradient(45deg, #007bff, #6610f2)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
      }}>
        My Projects
      </h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "2rem",
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        {projects.map((proj, idx) => (
          <div key={idx} style={{
            background: "white",
            borderRadius: "1rem",
            padding: "1.5rem",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            textAlign: "center"
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = "translateY(-8px)";
            e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.2)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.1)";
          }}>
            <span style={{ fontSize: "2rem" }}>{proj.icon}</span>
            <h3 style={{ margin: "1rem 0", fontSize: "1.5rem", color: "#343a40" }}>{proj.title}</h3>
            <p style={{ color: "#6c757d", marginBottom: "1.5rem" }}>{proj.desc}</p>
            <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
              <a href={proj.link} target="_blank" rel="noopener noreferrer"
                style={{
                  padding: "0.5rem 1rem",
                  backgroundColor: "#007bff",
                  color: "white",
                  borderRadius: "20px",
                  textDecoration: "none",
                  transition: "background 0.3s"
                }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = "#0056b3"}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = "#007bff"}
              >Live</a>
              <a href={proj.github} target="_blank" rel="noopener noreferrer"
                style={{
                  padding: "0.5rem 1rem",
                  backgroundColor: "#343a40",
                  color: "white",
                  borderRadius: "20px",
                  textDecoration: "none",
                  transition: "background 0.3s"
                }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = "#495057"}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = "#343a40"}
              >GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
