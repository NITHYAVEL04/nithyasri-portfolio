// Replace 'YOUR_BACKEND_URL' with the link you copied from Render
fetch('https://nithya-backend.onrender.com/api/projects')
    .then(response => response.json())
    .then(data => {
        const projectList = document.getElementById('project-list');
        // This dynamically loads your projects (Bot-Based System, PEGA projects, etc.)
        data.forEach(proj => {
            const div = document.createElement('div');
            div.className = 'project-card';
            div.innerHTML = `<h3>${proj.title}</h3><p>${proj.desc}</p>`;
            projectList.appendChild(div);
        });
    })
    .catch(error => console.error('Error fetching data:', error));