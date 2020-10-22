const colors = ["green", "red", "rgba(133,122,200)", "#f15025", '#F1f5f8'];

const button = document.getElementById("btn");
const color = document.querySelector(".color");

//adding an event-listener to buttom
button.addEventListener('click', function () {
    //getting random number between the length of the array
    const randomNum = getRandomNum();
    console.log(randomNum);

    document.body.style.backgroundColor = colors[randomNum]
    color.textContent = colors[randomNum]
});

function getRandomNum() {
    //math.random() = 0 - 0.999999 but never gets to one. 
    //Math.floor() = rounds up the number to the nearest whole num
    let result = Math.floor(Math.random() * colors.length);
    return result;
    
}