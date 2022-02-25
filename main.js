const container = document.querySelector("#container")


function makeRows(rows, columns) {
   
    container.style.setProperty("--grid-rows", rows)
    container.style.setProperty("--grid-columns", columns)
   
    for (i = 0; i < (rows * columns); i++) {
        let square = document.createElement("div")
       // square.textContent = (i + 1)// labels squares//
      
        container.appendChild(square).className = "grid-item"
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = 'black'
         //  console.log(square) 
        })
    }
}

const resetButton = document.createElement("button")
constbuttonDiv = document.querySelector("buttonDiv")

resetButton.textContent = "Reset"
buttonDiv.append(resetButton)
resetButton.addEventListener("click", () => {
    document.querySelectorAll(".grid-item").forEach(e => e.remove())
    let userGridInput = prompt("Please enter the number of grid squares per side (max:100):")
    if (userGridInput >100) {
        alert("ERROR: You specified a grid size larger than the max of 100.")
        return
    }
    rows = userGridInput
    columns = userGridInput
    makeRows(rows, columns)
})
  

makeRows(16, 16)