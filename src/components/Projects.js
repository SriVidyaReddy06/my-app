import React,{useState} from 'react';
import { Button } from '@cloudscape-design/components';
import './Projects.css';

const projectsList = [
  {
    title: "PNC Bank – Borrower Insight",
    description: "Developed a client portal application for loan services using ReactJS and .NET Core.",
    details: "As a Full Stack Developer, I contributed to the development of a scalable mortgage loan web and mobile application using React JS, Kendo React, ASP.NET Core API, and SQL Server. I implemented a microservices-based architecture and containerized the application to ensure seamless scalability. I was responsible for managing DevOps pipelines, promoting code across environments for production readiness, and developing Proof of Concept (POC) projects for new business requirements. I also created unit test cases to maintain high code quality using Azure Test Plans and ensured compliance with WCAG accessibility standards, conducting thorough accessibility testing. Throughout the project, I collaborated closely with stakeholders, Product Owners, and scrum teams, delivering solutions within tight deadlines while also mentoring associates and conducting knowledge transfer (KT) sessions."
  },
  {
    title: "PNC Bank – VAPT Remediation",
    description: "Assessed and remediated security vulnerabilities for Enterprise! MLS applications.",
    details: "As part of the development team for the Enterprise Loan Management System, I assessed the application’s security vulnerabilities using CheckMarx and Contrast tools. I was responsible for developing code fixes for vulnerability remediation, conducting validation, and reviewing the fixes with senior developers before merging. I regularly presented product demos to the business team and Product Owners during sprint review meetings. Additionally, I contributed to risk assessment projects targeting commercial real estate and Enterprise loan management systems. Throughout the project, I provided training sessions and mentored intern associates to ensure knowledge transfer and team growth."
  },
  {
    title: "Graduate Research Assistant",
    description: "Doing Research projects on Software Engineering using Machine Learning and Large Language Models to automate code smell detection.",
    details: "I am working on research projects aimed on software engineering field using machine learning and large language models (LLMs). The project focuses on improving software quality and maintainability. Technologies used: Python, Machine Learning, LLMs."
  }
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const toggleProjectDetails = (index) => {
    setActiveProject(activeProject === index ? null : index);
  };

  return (
    <section id="projects-section" className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projectsList.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <Button variant="link" onClick={() => toggleProjectDetails(index)}>
              {activeProject === index ? "Hide Details" : "View Details"}
            </Button>
            {activeProject === index && (
              <div className="project-details">
                <p>{project.details}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;