function menuHover() {
    const navegation = document.querySelectorAll('nav');

    navegation.forEach(nav => {
        const menu = nav.querySelectorAll('li');

        menu.forEach(item => {
            item.addEventListener('mouseover', function() {
                this.classList.add('expanded');
                if(!isMobile()) {
                    this.querySelector('h6').style.display = 'block';
                }
            })
        
            item.addEventListener('mouseout', function() {
                this.classList.remove('expanded');
                if(!isMobile()) {
                    this.querySelector('h6').style.display = 'none';
                }
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

function isMobile() {
    return window.innerWidth <= 1025;
}

window.onload = function() {
    if (isMobile()) {
        const h6Elements = document.querySelectorAll('nav li h6');
        h6Elements.forEach(h6 => {
            h6.style.display = 'block !important';
        });
    }
};

function menuMobile() {
    const menu = document.querySelector('.menu');
    const menuIcon = menu.querySelector('img');

    menu.addEventListener('click', function() {
        const header = document.querySelector('header');
        if (header.style.left === "0px") {
            header.style.left = "-250px";
            menuIcon.src = "./assets/icons/menu-open.png";
        } else {
            header.style.left = "0";
            menuIcon.src = "./assets/icons/menu-close.png";
        }
    });
}
menuMobile();

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
                    document.getElementById('projectImage').src = project.mockup;
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