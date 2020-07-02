const container = document.querySelector(".container")
const button = document.querySelector("button")


let compStyles = window.getComputedStyle(container)
console.log(compStyles)


const createGrid = (gridSize) => {
    for (i=0; i<gridSize; i++) {
        for (n=0; n<=(gridSize-1); n++) {
            console.log('test')
            const div = document.createElement('div')
            div.className = `item`
            container.appendChild(div)
        }
    }
}

createGrid(2)

const findPercentage = (number, percentage) => {

}

button.addEventListener("click", function () { 
    const gridSize = prompt("Enter the number of squares");
    const percentage = (gridSize / 2) * 100
    const takeOff = 300 / (percentage / 100) 
    $(".item").remove();
    createGrid(gridSize)
    container.style.gridTemplateColumns = `repeat(${gridSize}, ${takeOff}px)`
    container.style.gridTemplateRows = `repeat(${gridSize}, ${takeOff}px)`    
})
