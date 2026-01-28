// Fetch projects from the backend API
fetch('http://localhost:3000/api/projects')
    .then(response => response.json())
    .then(data => {
        const projectList = document.getElementById('project-list');
        data.forEach(proj => {
            const div = document.createElement('div');
            div.className = 'project-card';
            div.innerHTML = `<h3>${proj.title}</h3><p>${proj.desc}</p>`;
            projectList.appendChild(div);
        });
    });