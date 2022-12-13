// Review Challenge 4: Taco Tray
// - Help our chef fill a tray with tacos! 

function getRandomNumberOfTacos() {
  /*
  Make this function return an array that contains 
  between one and ten taco emojis 🌮
  Use the following JavaScript concepts:
      - Math.random()
      - Math.floor()
      - new Array()
      - Array.fill()
  */
  ;
  const randomTacoCount = Math.floor(Math.random() * 10) + 1;
  const tacoTray = new Array(randomTacoCount)
  tacoTray.fill("🌮", 0, randomTacoCount);
  return tacoTray // replace this empty tray array

}

console.log(getRandomNumberOfTacos())

function putTacosOnTray() {
  return getRandomNumberOfTacos().map(function (taco) {
      return `<div class="taco">${taco}</div>`
  }).join('')
}

document.getElementById('tray').innerHTML = putTacosOnTray()