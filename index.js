setInterval(setClock, 1000)

const hourHand = document.getElementById('hour')
const minHand = document.getElementById('min')
const secHand = document.getElementById('sec')

function setClock() {
    const currentTime = new Date()
    const secRatio = currentTime.getSeconds() / 60
    const minRatio = (secRatio + currentTime.getMinutes()) / 60
    const hourRatio = (minRatio + currentTime.getHours()) / 12
    setRotation(secHand, secRatio)
    setRotation(minHand, minRatio)
    setRotation(hourHand, hourRatio)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotate', rotationRatio * 360)
}
setClock()