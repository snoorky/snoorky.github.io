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

function looping() {
    const messages = ['FrontEnd Developer', 'Mobile Developer', 'Freelancer', 'Designer'];
    const typing = document.querySelector('.cursor');

    let messageIndex = 0;
    let letterIndex = 0;
    let typingDelay = 150;
    let wordDelay = 2000;
    let isTyping = true;

    function typeNextLetter() {
        const currentMessage = messages[messageIndex];
        const currentLetter = currentMessage[letterIndex];

        typing.textContent += currentLetter;
        letterIndex++;

        if (letterIndex < currentMessage.length) {
            setTimeout(typeNextLetter, typingDelay);
        } else {
            isTyping = false;
            setTimeout(eraseText, wordDelay);
        }
    }

    function eraseText() {
        if (typing.textContent.length > 0) {
            isTyping = true;
            typing.textContent = typing.textContent.slice(0, -1);
            setTimeout(eraseText, typingDelay);
        } else {
            messageIndex = (messageIndex + 1) % messages.length;
            letterIndex = 0;
            setTimeout(typeNextLetter, typingDelay);
        }
    }
    typeNextLetter();

    setInterval(() => {
        if (isTyping) {
            typing.style.animation = 'none';
        } else {
            typing.style.animation = 'cursorPiscando 0.5s step-end infinite';
        }
    }, 100);
}
looping();

function greeting() {
    const currentHour = new Date();
    const text = document.getElementById('greeting');

    if (currentHour.getHours() < 12) {
        text.innerHTML = 'Good morning,';
    } else if (currentHour.getHours() < 18) {
        text.innerHTML = 'Good afternoon,';
    } else {
        text.innerHTML = 'Good evening,';
    }
}
greeting();

document.addEventListener('DOMContentLoaded', function() {
    function pagination() {
        const state = {
            currentPage: 1,
            perPage: 6,
            projects:[],
            pages: 0
        };

        const controls = {
            next() {
                if (state.currentPage < state.pages) {
                    state.currentPage++;
                    list.update(); // Correção aqui
                }
            },

            prev() {
                if (state.currentPage > 1) {
                    state.currentPage--;
                    list.update(); // Correção aqui
                }
            },

            createListeners() {
                document.getElementById('prevPage').addEventListener('click', () => {
                    controls.prev();
                });

                document.getElementById('nextPage').addEventListener('click', () => {
                    controls.next();
                });
            }
        };

        const list = {
            update() {
                const startIndex = (state.currentPage - 1) * state.perPage;
                const endIndex = Math.min(startIndex + state.perPage, state.projects.length);
                const items = state.projects.slice(startIndex, endIndex);

                const portfolio = document.querySelector('.portfolio');
                portfolio.innerHTML = ""; // Limpar antes de adicionar os novos itens

                items.forEach((project, index) => {
                    const item = document.createElement('div');
                    item.classList.add('item');

                    const img = document.createElement('img');
                    img.src = project.imageSrc;
                    img.alt = "Project image";
                    item.appendChild(img);

                    const description = document.createElement('div');
                    description.classList.add('description');

                    const info = document.createElement('div');
                    info.classList.add('info');

                    const title = document.createElement('h4');
                    title.textContent = project.title;

                    const typeCreation = document.createElement('p');
                    const typeSpan = document.createElement('span');
                    typeSpan.classList.add('type');
                    typeSpan.textContent = project.type;
                    const creationSpan = document.createElement('span');
                    creationSpan.classList.add('creation');
                    creationSpan.textContent = project.creationDate;
                    typeCreation.appendChild(typeSpan);
                    typeCreation.appendChild(document.createTextNode(' / '));
                    typeCreation.appendChild(creationSpan);

                    info.appendChild(title);
                    info.appendChild(typeCreation);

                    const cta = document.createElement('div');
                    cta.classList.add('cta');

                    const button = document.createElement('button');
                    const imgButton = document.createElement('img');
                    imgButton.src = "./assets/icons/projects.png";
                    imgButton.alt = "Access project icon";
                    button.appendChild(imgButton);

                    cta.appendChild(button);

                    description.appendChild(info);
                    description.appendChild(cta);

                    item.appendChild(description);

                    portfolio.appendChild(item);
                });

                const pagesContainer = document.getElementById('pages');
                pagesContainer.innerHTML = "";

                for (let i = 1; i <= state.pages; i++) {
                    const pageButton = document.createElement('button');
                    pageButton.textContent = i;
                    pageButton.addEventListener('click', () => {
                        state.currentPage = i;
                        list.update();
                    });

                    if (i === state.currentPage) {
                        pageButton.classList.add('current-page');
                    }
                    pagesContainer.appendChild(pageButton);
                }

                const prevButton = document.getElementById('prevPage');
                const nextButton = document.getElementById('nextPage');
                if (state.currentPage === 1) {
                    prevButton.classList.add('disabled');
                    prevButton.disabled = true;
                } else {
                    prevButton.classList.remove('disabled');
                    prevButton.disabled = false;
                }
                if (state.currentPage === state.pages) {
                    nextButton.classList.add('disabled');
                    nextButton.disabled = true;
                } else {
                    nextButton.classList.remove('disabled');
                    nextButton.disabled = false;
                }
            }
        };

        function loadProjects() {
            fetch('projects.json')
                .then(response => response.json())
                .then(data => {
                    state.projects = data;
                    state.pages = Math.ceil(state.projects.length / state.perPage);
                    list.update();
                })
                .catch(error => console.error('Error loading projects:', error));
        }

        loadProjects();
        controls.createListeners();
    }
    
    pagination();
});