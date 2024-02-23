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

function pagination() {
    const state = {
        currentPage: 1,
        perPage: 6,
        pages: Math.ceil(document.querySelectorAll('.portfolio .item').length / 6)
    }

    const controls = {
        next() {
            if (state.currentPage < state.perPage) {
                state.currentPage++
                update()

                if (state.currentPage === state.pages) {
                    document.getElementById('nextPage').classList.add('disabled');
                    document.getElementById('nextPage').disabled = true;
                }
                if (state.currentPage > 1) {
                    document.getElementById('prevPage').classList.remove('disabled');
                    document.getElementById('prevPage').disabled = false;
                }
            }
        },

        prev() {
            if (state.currentPage > 1) {
                state.currentPage--
                update()

                if (state.currentPage < state.pages) {
                    document.getElementById('nextPage').classList.remove('disabled');
                    document.getElementById('nextPage').disabled = false;
                }
                if (state.currentPage === 1) {
                    document.getElementById('prevPage').classList.add('disabled');
                    document.getElementById('prevPage').disabled = true;
                }
            }
        },

        createListeners() {
            document.getElementById('prevPage').addEventListener('click', () => {
                controls.prev()
            })

            document.getElementById('nextPage').addEventListener('click', () => {
                controls.next();
            })
        }
    }

    const list = {
        update() {
            const items = document.querySelectorAll('.portfolio .item');
            const startIndex = (state.currentPage - 1) * state.perPage;
            const endIndex = startIndex + state.perPage;
            const pagesContainer = document.getElementById('pages');
            pagesContainer.innerHTML = "";

            items.forEach((item, index) => {
                if (index >= startIndex && index < endIndex) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });

            for (let i = 1; i <= state.pages; i++) {
                const pageButton = document.createElement('button');
                pageButton.textContent = i;
                pageButton.addEventListener('click', () => {
                    state.currentPage = i;
                    update();
                });

                if (i === state.currentPage) {
                    pageButton.classList.add('current-page');
                }
                pagesContainer.appendChild(pageButton);
            }
        }
    };
    list.update();
    controls.createListeners();

    function update() {
        list.update();
    }
}
pagination();