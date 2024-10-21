import React from 'react';
import './ResumeAndProfiles.css';

const ResumeAndProfiles = () => {
    return (
        <section className="resume-section">
            <div className="resume-card">
                <h2>Download My Resume</h2>
                <p>Interested in learning more about my work and experience? Click below to download my resume.</p>
                <a href="/SriVidya_Resume.pdf" download className="resume-link">
                    <button className="resume-btn">Download Resume</button>
                </a>
            </div>

            <div className="social-card">
                <h2>Connect with Me</h2>
                <p>You can also check out my professional profiles:</p>
                <div className="social-links">
                    <a href="https://github.com/SrividyaPutta006" target="_blank" className="social-link">
                        <img src="/github-icon.png" alt="GitHub" className="social-icon" /> GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/srividya-puttareddygari" target="_blank" rel="noopener noreferrer" className="social-link">
                        <img src="/linkedin-icon.png" alt="LinkedIn" className="social-icon" /> LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
};
export default ResumeAndProfiles;