import React, { useState } from 'react';
import { profileData as initialData } from './data/profileData';
import EditForm from './components/EditForm';
import './App.css';

function App() {
  const [data, setData] = useState(initialData);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="app-container">
      <div className="resume-container">
        {isEditing ? (
          <div className="editor-view">
            <EditForm data={data} setData={setData} setIsEditing={setIsEditing} />
          </div>
        ) : (
          <>
            <header className="dark-header">
              <div className="photo-wrapper">
                <img src="/profile-pic.jpg" alt="Profile" className="round-photo" />
              </div>
              <div className="header-info">
                <h1 className="name-display">{data.personalInfo.name}</h1>
                <p className="role-display">{data.personalInfo.role}</p>
              </div>
            </header>

            <div className="resume-body">
              <aside className="sidebar">
                <section className="side-block">
                  <h2 className="side-header">CONTACT</h2>
                  <div className="contact-item">📞 {data.personalInfo.phone}</div>
                  <div className="contact-item">✉️ {data.personalInfo.email}</div>
                  <div className="contact-item">📍 {data.personalInfo.location}</div>
                </section>

                <section className="side-block">
                  <h2 className="side-header">SKILLS</h2>
                  <ul className="side-list">
                    {data.skills.map((skill, i) => <li key={i}>• {skill}</li>)}
                  </ul>
                </section>

                <section className="side-block">
                  <h2 className="side-header">LANGUAGES</h2>
                  <ul className="side-list">
                    {data.languages.map((lang, i) => (
                      <li key={i} className="lang-item">
                        <strong>{lang.name}</strong> <span>({lang.level})</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </aside>

              <main className="main-content">
                <section className="main-section">
                  <h2 className="main-header">PROFILE</h2>
                  <p className="summary-text">{data.personalInfo.summary}</p>
                </section>

                <section className="main-section">
                  <h2 className="main-header">WORK EXPERIENCE</h2>
                  {data.experience.map((exp, i) => (
                    <div key={i} className="exp-item">
                      <div className="exp-row">
                        <span className="exp-comp">{exp.company}</span>
                        <span className="exp-date">{exp.duration}</span>
                      </div>
                      <p className="exp-role">{exp.role}</p>
                      <p className="exp-desc">{exp.description}</p>
                    </div>
                  ))}
                </section>

                <section className="main-section">
                  <h2 className="main-header">EDUCATION</h2>
                  {data.education.map((edu, i) => (
                    <div key={i} className="edu-item">
                      <div className="exp-row">
                        <span className="edu-degree">{edu.degree}</span>
                        <span className="exp-date">{edu.year}</span>
                      </div>
                      <p className="exp-role">{edu.school}</p>
                    </div>
                  ))}
                </section>

                <section className="main-section">
                  <h2 className="main-header">PROJECTS</h2>
                  {data.projects && data.projects.map((proj, i) => (
                    <div key={i} className="exp-item">
                      <div className="exp-row">
                        <span className="edu-degree">{proj.title}</span>
                        <span className="exp-date" style={{color: '#3498db'}}>{proj.tech}</span>
                      </div>
                      <p className="exp-desc" style={{marginTop: '5px'}}>{proj.description}</p>
                    </div>
                  ))}
                </section>
              </main>
            </div>
          </>
        )}

        <button className="edit-btn" onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? "SAVE & CLOSE" : "EDIT RESUME"}
        </button>
      </div>
    </div>
  );
}

export default App;