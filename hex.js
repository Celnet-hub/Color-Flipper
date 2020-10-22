const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const button = document.getElementById("btn");
const color = document.querySelector(".color");

//adding an event-listener to buttom
button.addEventListener("click", function () {
  let colorValue = "#";
  for (let i = 0; i < 6; i++) {
    //6 is used because '#F1f5f8' has 6 characters after #
    colorValue += hex[randomNum()];
    // console.log(hex[randomNum()]);
  }

  document.body.style.backgroundColor = colorValue;
  color.textContent = colorValue;
});

function randomNum() {
  //math.random() = 0 - 0.999999 but never gets to one.
  //Math.floor() = rounds up the number to the nearest whole num
  let result = Math.floor(Math.random() * hex.length);
  return result;
}
