const container = document.querySelector("div")


function makeRows(rows, columns) {
    container.style.setProperty("--grid-rows", rows)
    container.style.setProperty("--grid-columns", columns)
    container.style.width = '960px'
    container.style.overflow = 'hidden'
   
    for (i = 0; i < (rows * columns); i++) {
        let square = document.createElement('div')
       // square.textContent = (i + 1)// labels squares//
       square.style.minHeight = '0'
       square.style.minWidth = '0'
       square.style.overflow = 'hidden'
        container.appendChild(square).className = 'grid-item'
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black'
           // console.log(square)
        })
    }
createButton():
function createButton() {
    const buttonDiv = document.querySelector('#buttonDiv')
    const resetButton = document.createElement('button'):
    resetButton.textContent = 'Reset grid!'
    resetButton.style.margin = '20px'
    buttonDiv.appendChild(resetButton):
    resetButton.addEventListener('click', ( =>)
    document.querySelectorAll('gridItem').forEach => e.remove())
    let userGridInput = prompt('Please enter the number of grid squares per side (Max: 100): ')
    if (userGridInput > 100) {
        alert('ERROR! You specified a grid size larger than the max of 100.')
        return
    } 
    rows = userGridInput
    columns = userGridInput
    makeGrid(rows, columns)
})



}
makeGrid(16, 16)