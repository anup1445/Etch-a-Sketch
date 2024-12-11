// const numberOfGrids = Number(prompt("enter the size of the grid between 1 - 100"));
const container = document.querySelector('.container');
const btn = document.querySelector('button');

btn.addEventListener('click', (e) => {
    let sizeOfGrid = parseInt(prompt("Enter the size of the grid between 1-100"));
    
    if (sizeOfGrid < 1 || sizeOfGrid > 100 || isNaN(sizeOfGrid)) {
      alert("Please enter a valid number between 1 and 100.");
      return;
    }
  
    // Clear existing grid
    container.innerHTML = '';
  
    // Calculate dynamic size for each square
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const squareSize = containerWidth / sizeOfGrid;
  
    for (let i = 0; i < sizeOfGrid * sizeOfGrid; i++) {
      const div = document.createElement('div');
      div.style.width = `${squareSize}px`;
      div.style.height = `${squareSize}px`;
      div.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = randomColor();
      });
      container.appendChild(div);
    }
  });
  


let newColor;
function randomColor() {
    const r = Math.floor(Math.random() *255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);

    newColor = r * 0.299 + g * 0.587 +b * 0.114;
    if(newColor > 186) {
        newColor = 'black';
    } else {
        newColor = 'white';
    }

    return `rgb(${r}, ${g}, ${b})`;
}

