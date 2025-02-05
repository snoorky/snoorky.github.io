class ThemeManager {
    constructor() {
        this.body = document.body;
        this.themeData = {
            light: {
                bodyClass: ['bg-white', 'text-black'],
                reversedClass: ['bg-[#EFF0F3]', 'text-black'],
                cardsClass: ['bg-[#E7E8EC]', 'text-black'],
                inputsClass: ['bg-[#E0E1E6]', 'text-black'],
                iconToShow: document.getElementById('light-icon'),
                iconToHide: document.getElementById('dark-icon')
            },
            dark: {
                bodyClass: ['bg-[#111111]', 'text-white'],
                reversedClass: ['bg-[#1F1F22]', 'text-white'],
                cardsClass: ['bg-[#27282C]', 'text-white'],
                inputsClass: ['bg-[#2F3035]', 'text-white'],
                iconToShow: document.getElementById('dark-icon'),
                iconToHide: document.getElementById('light-icon')
            }
        };
    }
  
    toggleTheme() {
        const currentTheme = this.body.classList.contains('bg-white') ? 'light' : 'dark';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }
  
    setTheme(theme) {
        const themeConfig = this.themeData[theme];
        this.updateClasses(themeConfig);
        localStorage.setItem('theme', theme);
    }

    safeUpdateClass(elementId, firstClass, secondClass, addClasses) {
        const element = document.getElementById(elementId);
        if (element) {
            element.classList.remove(...firstClass, ...secondClass);
            element.classList.add(...addClasses);
        }
    }
  
    updateClasses(config) {
        this.body.classList.remove(...this.themeData.light.bodyClass, ...this.themeData.dark.bodyClass);
        this.body.classList.add(...config.bodyClass);
    
        const elementsToUpdate = [
            { id: "menu", firstClass: this.themeData.light.reversedClass, secondClass: this.themeData.dark.reversedClass, addClasses: config.reversedClass },
            { id: "dropdown-menu", firstClass: this.themeData.light.reversedClass, secondClass: this.themeData.dark.reversedClass, addClasses: config.reversedClass },
            { id: "dropdown-toggle", firstClass: this.themeData.light.reversedClass, secondClass: this.themeData.dark.reversedClass, addClasses: config.reversedClass },
            { id: "boxContainer", firstClass: this.themeData.light.reversedClass, secondClass: this.themeData.dark.reversedClass, addClasses: config.reversedClass },
            { id: "boxWebsiteService", firstClass: this.themeData.light.cardsClass, secondClass: this.themeData.dark.cardsClass, addClasses: config.cardsClass },
            { id: "boxLandingPageService", firstClass: this.themeData.light.cardsClass, secondClass: this.themeData.dark.cardsClass, addClasses: config.cardsClass },
            { id: "boxEcommerceService", firstClass: this.themeData.light.cardsClass, secondClass: this.themeData.dark.cardsClass, addClasses: config.cardsClass },
            { id: "formsContainer", firstClass: this.themeData.light.reversedClass, secondClass: this.themeData.dark.reversedClass, addClasses: config.reversedClass },
            { id: "formsBox", firstClass: this.themeData.light.cardsClass, secondClass: this.themeData.dark.cardsClass, addClasses: config.cardsClass },
            { id: "name", firstClass: this.themeData.light.inputsClass, secondClass: this.themeData.dark.inputsClass, addClasses: config.inputsClass },
            { id: "email", firstClass: this.themeData.light.inputsClass, secondClass: this.themeData.dark.inputsClass, addClasses: config.inputsClass },
            { id: "message", firstClass: this.themeData.light.inputsClass, secondClass: this.themeData.dark.inputsClass, addClasses: config.inputsClass },
        ];

        elementsToUpdate.forEach(item => {
            this.safeUpdateClass(item.id, item.firstClass, item.secondClass, item.addClasses);
        });

        const footer = document.querySelector('footer');
        if (footer) {
            footer.classList.remove(...this.themeData.light.reversedClass, ...this.themeData.dark.reversedClass);
            footer.classList.add(...config.reversedClass);
        }
    
        config.iconToShow.classList.remove('hidden');
        config.iconToHide.classList.add('hidden');
    }
}
 
class TranslationManager {
    constructor() {
        this.selectedLanguage = document.getElementById("selected-language");
        this.languageDropdown = document.getElementById("language-dropdown");
        this.languageCode = localStorage.getItem('language') || this.getBrowserLanguage();
        this.updateSelectedLanguageText(this.languageCode);
    }

    getBrowserLanguage() {
        const browserLanguage = navigator.language || navigator.userLanguage;
        return browserLanguage.startsWith('pt') ? 'pt-br' : 'en-us';
    }
  
    loadTranslations(languageCode) {
        fetch('/languages.json')
        .then(response => response.json())
        .then(data => {
            const translations = data[languageCode] || data["en-us"];
            this.applyTranslations(translations);
            localStorage.setItem('language', languageCode);
            this.updateSelectedLanguageText(languageCode);
        })
        .catch(error => console.error("Erro ao carregar o arquivo de traduções:", error));
    }
  
    applyTranslations(translations) {
        document.querySelectorAll("[data-translate]").forEach(element => {
            const key = element.getAttribute("data-translate");
            if (translations[key]) {
            element.innerHTML = translations[key];
            }
        });
    }

    updateSelectedLanguageText(languageCode) {
        const selectedText = languageCode === 'pt-br' ? 'Português' : 'English';
        document.getElementById("selected-language").textContent = selectedText;
    }
}
  
const themeManager = new ThemeManager();
const translationManager = new TranslationManager();

translationManager.loadTranslations(translationManager.languageCode);

document.getElementById("dropdown-toggle").addEventListener("click", () => {
    document.getElementById("dropdown-menu").classList.toggle("hidden");
});

document.getElementById("dropdown-menu").addEventListener("click", (event) => {
    const selectedValue = event.target.getAttribute("data-value");
    translationManager.loadTranslations(selectedValue);
    document.getElementById("dropdown-menu").classList.add("hidden");
});

document.getElementById("theme-toggle").addEventListener('click', () => themeManager.toggleTheme());

document.getElementById("menu-toggle").addEventListener("click", () => {
    menu.classList.toggle("hidden");
    document.body.classList.toggle("no-scroll");
});

const menu = document.getElementById("menu");
if (!menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
}
  
themeManager.setTheme(localStorage.getItem('theme') || 'light');
translationManager.loadTranslations(localStorage.getItem('language') || 'en-us');