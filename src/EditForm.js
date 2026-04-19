import React, { useState } from 'react';

function EditForm({ data, setData, setIsEditing }) {
  const [form, setForm] = useState(data.personalInfo);

  const handleSave = (e) => {
    e.preventDefault();
    setData({ ...data, personalInfo: form });
    setIsEditing(false); // Closes editor after saving
  };

  return (
    <form onSubmit={handleSave} style={{textAlign: 'left'}}>
      <h2>Edit Information</h2>
      <div style={{marginBottom: '15px'}}>
        <label>Name</label><br/>
        <input style={{width: '100%', padding: '8px'}} name="name" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} />
      </div>
      <div style={{marginBottom: '15px'}}>
        <label>Role</label><br/>
        <input style={{width: '100%', padding: '8px'}} name="role" value={form.role} onChange={(e) => setForm({...form, role: e.target.value})} />
      </div>
      <div style={{marginBottom: '15px'}}>
        <label>Summary</label><br/>
        <textarea style={{width: '100%', padding: '8px'}} rows="5" value={form.summary} onChange={(e) => setForm({...form, summary: e.target.value})} />
      </div>
      <button type="submit" style={{padding: '10px 20px', background: '#27ae60', color: 'white', border: 'none'}}>Apply Changes</button>
    </form>
  );
}

export default EditForm;