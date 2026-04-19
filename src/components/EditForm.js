import React, { useState } from 'react';

function EditForm({ data, setData }) {
  const [form, setForm] = useState(data.personalInfo);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    setData({ ...data, personalInfo: form });
    alert("Profile saved successfully!");
  };

  return (
    <form className="editor-view" onSubmit={handleSave}>
      <h2>Edit Personal Branding</h2>
      <div className="form-group">
        <label>Full Name</label>
        <input name="name" value={form.name} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Professional Title</label>
        <input name="role" value={form.role} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Professional Summary</label>
        <textarea name="summary" rows="6" value={form.summary} onChange={handleChange} />
      </div>
      <button type="submit" style={{padding: '10px 20px', background: '#27ae60', color: '#fff', border: 'none', borderRadius: '4px'}}>
        Apply Changes
      </button>
    </form>
  );
}

export default EditForm;