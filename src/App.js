import React, { useState, useEffect } from 'react';
import { Button, Link } from '@cloudscape-design/components';
import './App.css';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import ResumeAndProfiles from './components/ResumeAndProfiles';

function App() {
  const [greeting, setGreeting] = useState("");

  // useEffect to set a greeting based on the time of day
  useEffect(() => {
    const hours = new Date().getHours();
    if (hours < 12) {
      setGreeting("Good Morning");
    } else if (hours < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects-section").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      {/* Header section of the page */}
      <header className="App-header">
        <h1>{greeting}, I'm Sri Vidya Puttareddygari</h1>
        <p> Software Engineer | Full Stack Developer | Graduate Research Assistant</p>
        <Button variant="primary" onClick={scrollToProjects}>Explore My Work</Button>
      </header>
      {/* Individual components added for the info */}
      <AboutMe />
      <Projects />
      <ResumeAndProfiles />
      <ContactMe />
      {/* footer section of the page */}
      <footer>
        <p>&copy; 2024 Sri Vidya Puttareddygari</p>
        <Link href="mailto:srividya.puttareddy@outlook.com">Contact Me</Link>
      </footer>
    </div>
  );
}

export default App;