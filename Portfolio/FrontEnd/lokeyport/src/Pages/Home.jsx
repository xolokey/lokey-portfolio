import React from "react";

export default function Home() {
  const projects = [
    {
      title: "Mavrick - Enterprise Web Applications",
      desc: "Built and optimized enterprise web applications using C#, .NET Core, ADO.NET, React, and SQL Server. Developed REST APIs and implemented role-based authentication and reporting modules.",
      icon: "🏢",
      link: "#",
      github: "#",
    },
    {
      title: "Student Information & Asset Management System",
      desc: "Designed and implemented a full-stack application using ASP.NET and React for managing student records, payments, and asset tracking. Features include authentication, role-based dashboards, and exportable reports.",
      icon: "🎓",
      link: "#",
      github: "#",
    },
    {
      title: "Real-Time Navigation System (UWB + AI)",
      desc: "Engineered an indoor positioning system using Ultra-Wideband technology and Machine Learning for precise real-time tracking. Integrated data acquisition, filtering, and visualization for monitoring accuracy.",
      icon: "🛰️",
      link: "#",
      github: "#",
    },
    {
      title: "Marine Security Alert System (SEAMAN)",
      desc: "Developed an RF-based marine navigation system with automated emergency alerts for danger zones, ensuring low-latency communication and event-triggered notifications.",
      icon: "⚓",
      link: "#",
      github: "#",
    },
    {
      title: "AgriView",
      desc: "A AI integrated web application for agricultural data analysis and visualization.",
      icon: "🌾",
      link: "https://agriview.onrender.com",
      github: "https://github.com/xolokey/AgriView",
    },
    {
      title: "LUXE - E-commerce",
      desc: "A modern e-commerce platform for luxury fashion with fully functional operations .",
      icon: "💎",
      link: "https://luxe-shopping.vercel.app",
      github: "https://github.com/xolokey/v0-LUXE",
    },
  ];

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f8f9fa',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '3rem 1.5rem',
      fontFamily: "'Inter', sans-serif",
    }}>
      {/* Hero Section */}
      <section
        style={{
          textAlign: 'center',
          marginBottom: '5rem',
          padding: '2rem',
          borderRadius: '1.5rem',
          border: '1px solid #e9ecef',
          background: 'radial-gradient(circle, #ffffff 0%, #e9ecef 100%)',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
          animation: 'fadeInUp 1s ease-in-out',
        }}
      >
        <h1
          style={{
            fontSize: '3.5rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            background: 'linear-gradient(45deg, #007bff, #6610f2)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            color: 'transparent',
            letterSpacing: '-1px',
          }}
        >
          Hi, I’m Lokesh S 👋
        </h1>
        <p style={{ fontSize: '1.5rem', color: '#495057', fontWeight: 500, marginBottom: '1.5rem' }}>
          Full-Stack Developer with expertise in .NET and React
        </p>
        <p style={{ fontSize: '1rem', color: '#6c757d', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto', lineHeight: 1.6 }}>
          Driven software developer with hands-on experience in full-stack development using .NET and React. Proven ability to build scalable web applications, design RESTful APIs, and optimize database performance.
        </p>
        <a
          href="#projects"
          style={{
            display: 'inline-block',
            padding: '1rem 2rem',
            backgroundColor: '#343a40',
            color: 'white',
            fontWeight: 'bold',
            borderRadius: '50px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease',
            textDecoration: 'none',
            position: 'relative',
            overflow: 'hidden',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
          }}
        >
          <span style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '300%',
            height: '300%',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
            transform: 'translate(-50%, -50%) scale(0)',
            transition: 'all 0.5s ease',
          }}></span>
          View My Work
        </a>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2.5rem',
          width: '100%',
          maxWidth: '1200px',
          padding: '0 1rem',
        }}
      >
        {projects.map((proj, idx) => (
          <div
            key={idx}
            style={{
              background: 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(10px)',
              borderRadius: '1rem',
              padding: '1.5rem',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.18)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px) scale(1.03)';
              e.currentTarget.style.boxShadow = '0 16px 40px rgba(31, 38, 135, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(31, 38, 135, 0.1)';
            }}
          >
            <a href={proj.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginBottom: '0.75rem',
                color: '#343a40',
                display: 'flex',
                alignItems: 'center',
              }}>
                <span style={{ marginRight: '0.5rem', fontSize: '1.5rem' }}>{proj.icon}</span>
                {proj.title}
              </h3>
              <p style={{ color: '#6c757d', lineHeight: 1.5, fontSize: '0.9rem' }}>
                {proj.desc}
              </p>
            </a>
            <a
              href={proj.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                marginTop: '1rem',
                padding: '0.5rem 1rem',
                backgroundColor: '#343a40',
                color: 'white',
                fontWeight: 'bold',
                borderRadius: '50px',
                textDecoration: 'none',
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#495057'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#343a40'}
            >
              GitHub
            </a>
          </div>
        ))}
      </section>
    </div>
  );
}