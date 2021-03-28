const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
    themeToggleRef: document.querySelector('#theme-switch-toggle'),
    bodyRef: document.querySelector('body')
}

refs.themeToggleRef.addEventListener('change', onSwitchTheme)

const currentTheme = localStorage.getItem('theme')
refs.bodyRef.classList.add(currentTheme)
refs.themeToggleRef.checked = currentTheme === Theme.DARK?true:false

function onSwitchTheme(e) {
    if (refs.bodyRef.classList.contains(Theme.LIGHT)) {
        removeThemeLocalStorage()
        localStorage.setItem('theme', Theme.DARK)
         refs.bodyRef.classList.remove(Theme.LIGHT)
        addClassTheme()
    }
    else {
        removeThemeLocalStorage()
        localStorage.setItem('theme', Theme.LIGHT)
         refs.bodyRef.classList.remove(Theme.DARK)
        addClassTheme()
    }
}
function removeThemeLocalStorage() {
     localStorage.removeItem('theme')
}
function addClassTheme() {
    refs.bodyRef.classList.add(localStorage.getItem('theme')) 
}


