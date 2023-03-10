const body = document.querySelector('body')
const darkBtn = document.getElementById('dark-btn')
const lightBtn = document.getElementById('light-btn')

//toggle mode
const modeLocal = localStorage.getItem('mode')

const modeLocalIcon = () =>{
  darkBtn.classList.toggle('hidden')
  lightBtn.classList.toggle('hidden')
  body.classList.toggle('dark-mode')
}

if (modeLocal) {
  modeLocalIcon()
}

const toggleModeBtn = () => {
  modeLocalIcon()
}

darkBtn.addEventListener('click', () => {
  toggleModeBtn()
  localStorage.setItem('mode', 'dark-mode')
})

lightBtn.addEventListener('click', () => {
  toggleModeBtn()
  localStorage.setItem('mode', '')
})