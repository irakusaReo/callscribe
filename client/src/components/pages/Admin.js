import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Admin = () => {
    const [scripts, setScripts] = useState([]);
    const [form, setForm] = useState({
        title: '',
        content: '',
        branches: [],
        checkpoints: []
    });

    const fetchScripts = async () => {
        const res = await axios.get('/api/scripts');
        setScripts(res.data);
    };

    useEffect(() => {
        fetchScripts();
    }, []);

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async e => {
        e.preventDefault();
        const res = await axios.post('/api/scripts', form);
        setScripts([...scripts, res.data]);
        setForm({ title: '', content: '', branches: [], checkpoints: [] });
    };

    return (
        <div>
            <h1>Admin Page</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" value={form.title} onChange={handleChange} placeholder="Title" required />
                <textarea name="content" value={form.content} onChange={handleChange} placeholder="Content" required></textarea>
                {/* Add form fields for branches and checkpoints as needed */}
                <button type="submit">Add Script</button>
            </form>
            <ul>
                {scripts.map(script => (
                    <li key={script._id}>
                        <h2>{script.title}</h2>
                        <p>{script.content}</p>
                        {/* Display branches and checkpoints as needed */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Admin;
