// app.js
const player = document.getElementById('player')
const toggleButton = document.getElementById('toggle')
const toggleIcon = document.getElementById('toggle-icon')

let isPlaying = false

toggleButton.addEventListener('click', () => {
  if (isPlaying == false) {
    player.play()
    toggleIcon.src = 'src/icon/pause.svg'
  } else {
    player.pause()
    toggleIcon.src = 'src/icon/play.svg'
  }
  isPlaying = !isPlaying
})