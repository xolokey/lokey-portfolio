import React from 'react';
import styled, { keyframes } from 'styled-components';

// Animations
const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

// Containers
const PageContainer = styled.div`
  min-height: 100vh;
  background: #f8f9fa;
  padding: 3rem 1.5rem;
  font-family: 'Inter', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  color: #495057;
`;

// Header
const HeaderSection = styled.section`
  text-align: center;
  max-width: 800px;
  animation: ${fadeInUp} 1s ease forwards;

  h1 {
    font-size: 3.5rem;
    font-weight: bold;
    background: linear-gradient(90deg, #007bff, #6610f2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.6;
    color: #6c757d;
  }
`;

// Section
const Section = styled.section`
  max-width: 900px;
  width: 100%;
  animation: ${fadeInUp} 1s ease forwards;
  opacity: 0;
  animation-delay: ${({ delay }) => delay || "0s"};
`;

// Section Header
const SectionHeader = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #343a40;
  border-left: 5px solid #007bff;
  padding-left: 1rem;
`;

// Skills
const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  justify-content: center;
`;

const SkillBadge = styled.span`
  padding: 0.6rem 1.2rem;
  background-color: #343a40;
  color: white;
  border-radius: 20px;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #007bff;
    box-shadow: 0 4px 12px rgba(0, 123, 255, 0.4);
    animation: ${pulse} 0.6s ease infinite;
  }
`;

// Card
const Card = styled.div`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
  padding: 1.8rem;
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
  }

  h3 {
    font-size: 1.4rem;
    color: #007bff;
    margin-bottom: 0.5rem;
  }
`;

const ProjectLink = styled.a`
  color: #007bff;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

export default function About() {
  const skills = [
    "C#", ".NET Core", "ASP.NET", "React", "JavaScript", "SQL Server",
    "PostgreSQL", "Entity Framework", "REST APIs", "HTML5", "CSS3",
    "TailwindCSS", "Bootstrap", "Git", "Azure"
  ];

  const experience = [
    {
      role: "Full-Stack Developer",
      company: "XYZ Tech Solutions",
      duration: "2023 - Present",
      desc: "Building scalable web apps using .NET Core and React with REST API integration and database optimization."
    },
    {
      role: "Software Developer Intern",
      company: "ABC Innovations",
      duration: "2022 - 2023",
      desc: "Worked on enterprise apps, implemented role-based authentication, and developed reporting modules."
    }
  ];

  const education = [
    {
      degree: "B.E. in Computer Science",
      college: "Your College Name",
      duration: "2019 - 2023",
      desc: "Studied core CS subjects, software engineering principles, and built multiple full-stack projects."
    }
  ];

  const projects = [
    {
      name: "Asset Management System",
      techStack: ".NET Core, React, SQL Server, Entity Framework",
      description: "Full-stack app for managing assets, employee assignments, and service requests with role-based access.",
      link: "https://github.com/xolokey/assertmanagement"
    },
    {
      name: "E-commerce Platform",
      techStack: "ASP.NET Core, React, PostgreSQL",
      description: "Marketplace with product management, cart features, and order history.",
      link: "https://github.com/harid23/phase-ii"
    },
    {
      name: "AgriView",
      techStack: "C#, .NET, OpenAI API, React, TypeScript",
      description: "Agricultural management tool using AI for crop insights and optimization.",
      link: "https://github.com/xolokey/agriview"
    }
  ];

  return (
    <PageContainer>
      <HeaderSection>
        <h1>About Me</h1>
        <p>
          I'm Lokesh S, a Full-Stack Developer skilled in .NET Core, React, and modern web tech.
          I focus on building performant, user-friendly applications while continuously learning.
        </p>
      </HeaderSection>

      <Section delay="0.1s">
        <SectionHeader>Skills</SectionHeader>
        <SkillsGrid>
          {skills.map((skill, idx) => <SkillBadge key={idx}>{skill}</SkillBadge>)}
        </SkillsGrid>
      </Section>

      <Section delay="0.2s">
        <SectionHeader>Experience</SectionHeader>
        {experience.map((exp, idx) => (
          <Card key={idx}>
            <h3>{exp.role}</h3>
            <p style={{ margin: "0", color: "#495057" }}>{exp.company} | {exp.duration}</p>
            <p style={{ margin: "0.5rem 0", color: "#6c757d" }}>{exp.desc}</p>
          </Card>
        ))}
      </Section>

      <Section delay="0.3s">
        <SectionHeader>Creative Projects</SectionHeader>
        {projects.map((project, idx) => (
          <Card key={idx}>
            <h3><ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">{project.name}</ProjectLink></h3>
            <p><strong>Tech Stack:</strong> {project.techStack}</p>
            <p style={{ margin: "0.5rem 0", color: "#6c757d" }}>{project.description}</p>
          </Card>
        ))}
      </Section>

      <Section delay="0.4s">
        <SectionHeader>Education</SectionHeader>
        {education.map((edu, idx) => (
          <Card key={idx}>
            <h3>{edu.degree}</h3>
            <p style={{ margin: "0", color: "#495057" }}>{edu.college} | {edu.duration}</p>
            <p style={{ margin: "0.5rem 0", color: "#6c757d" }}>{edu.desc}</p>
          </Card>
        ))}
      </Section>
    </PageContainer>
  );
}
