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