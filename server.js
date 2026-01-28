const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const projects = [
    { title: "Cardiovascular Disease Management", desc: "Python-based remote monitoring system for patient vitals." },
    { title: "Three-Level Security Authentication", desc: "Multi-layer model using graphical passwords and OTP." },
    { title: "Drug Purchase Reminder System", desc: "PEGA-based automated reminder system for medical purchases." }
];

app.get('/api/projects', (req, res) => { res.json(projects); });

app.listen(3000, () => console.log('Backend running on http://localhost:3000'));