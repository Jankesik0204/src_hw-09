// Pobieramy przyciski
const startButton = document.querySelector('[data-start]')
const stopButton = document.querySelector('[data-stop]')

// Zmienna przechowująca identyfikator timeout
let colorChangeTimeout

// Funkcja zmieniająca kolor tła co sekunde
function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomHexColor()
  colorChangeTimeout = setTimeout(changeBackgroundColor, 1000)
}

// Funkcja generująca losowy kolor HEX
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

// Obsługa zdarzenia kliknięcia przycisku "Start"
startButton.addEventListener('click', function () {
  // Ustawiamy tło na początkowy kolor biały
  document.body.style.backgroundColor = '#ffffff'

  // Uruchamiamy funkcję zmieniającą kolor co 2 sekundy
  changeBackgroundColor()

  // Deaktywujemy przycisk "Start"
  startButton.disabled = true
})

// Obsługa zdarzenia kliknięcia przycisku "Stop"
stopButton.addEventListener('click', function () {
  // Zatrzymujemy zmianę koloru tła
  clearTimeout(colorChangeTimeout)

  // Resetujemy kolor tła do białego
  document.body.style.backgroundColor = '#ffffff'

  // Aktywujemy przycisk "Start"
  startButton.disabled = false
})
