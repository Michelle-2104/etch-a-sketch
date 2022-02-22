const container = document.querySelector('container')
let gridCount = 0

while (gridCount < 32) {
    const gridDivs = document.createElement('div')
    gridDivs.classList.add('content')
    gridDivs..textContent = 'HELLO'
    container.appendChild(gridDivs)
    gridCount++
    console.log(gridCount)
}