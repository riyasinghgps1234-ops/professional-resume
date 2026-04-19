import React from 'react';

function Header({ info }) {
  return (
    <header className="resume-header">
      <div className="header-top">
        <img src="/profile-pic.jpg" alt="Profile" className="profile-img" />
        <div className="header-text">
          <h1>{info.name}</h1>
          <p className="role-title">{info.role}</p>
          <div className="contact-info">
            <span>{info.email}</span> • <span>{info.location}</span> • <span>linkedin.com/in/riyasingh</span>
          </div>
        </div>
      </div>
      {/* This is the divider line you requested */}
      <hr className="main-divider" />
    </header>
  );
}

export default Header;