function menuHover() {
    const navegation = document.querySelectorAll('nav');

    navegation.forEach(nav => {
        const menu = nav.querySelectorAll('li');

        menu.forEach(item => {
            item.addEventListener('mouseover', function() {
                this.classList.add('expanded');
                this.querySelector('h6').style.display = 'block';
            })
        
            item.addEventListener('mouseout', function() {
                this.classList.remove('expanded');
                this.querySelector('h6').style.display = 'none';
            })

            item.addEventListener('click', function(event) {
                menu.forEach(item => {
                    item.classList.remove('active');
                });
                this.classList.add('active');
            })
        });
    });
}
menuHover();

function projects() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('projectID');

    function loadProjectDetails(projectId) {
        fetch('projects.json')
            .then(response => response.json())
            .then(data => {
                const project = data.find(item => item.id == projectId);
                if (project) {
                    document.getElementById('projectTitle').textContent = project.title;
                    document.getElementById('projectImage').src = project.imageSrc;
                    document.getElementById('projectDate').textContent = project.creationDate;
                    document.getElementById('projectDescription').textContent = project.description;
                    document.getElementById('repositoryLink').href = project.repository;
                    document.getElementById('siteLink').href = project.live;
                } else {
                    console.error('Project not found');
                }
            })
            .catch(error => console.error('Error loading project details:', error));
    }
    loadProjectDetails(projectId);
};
projects();