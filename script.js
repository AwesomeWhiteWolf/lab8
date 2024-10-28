function check() {
  let num = document.querySelector(".ti1");
  let label = document.querySelector(".tl1");
  if (num.value > 0) {
    console.log(1);
    label.innerHTML = num.value*num.value;
  }
  if (num.value < 0) {
    console.log(num.value*num.value);
  }
  else {
    alert(num.value*num.value);
  }
}

function img() {
  let arrImg = new Array ( "https://i.pinimg.com/736x/19/73/1d/19731ddcd9c389a823da3c238b8ce499.jpg", 
    "https://i.pinimg.com/736x/61/2b/5a/612b5a6b17a8ac212aa71513597d3004.jpg", 
    "https://i.pinimg.com/474x/e5/07/99/e50799dcdb80bf3449b81005c01a6093.jpg" );
  let num = document.querySelector(".ti2");
  let img = document.querySelector("img");
  if ((num.value > 3) || (num.value < 1)) {
    alert("Введите от 1 до 3");
  }
  else {
    img.src = arrImg[num.value-1];
  }
}

function getRandomInt(min, max) {  
  return Math.floor(Math.random() * (max - min + 1)) + min;  
}  

function createRandomBlock() {  
  const block = document.querySelector('.t3');  

  const width = getRandomInt(100, 500);
  const height = getRandomInt(100, 500);

  block.style.width = `${width}px`;  
  block.style.height = `${height}px`;  
  const r = getRandomInt(0, 255);  
  const g = getRandomInt(0, 255);  
  const b = getRandomInt(0, 255); 
  block.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;  

  const area = width * height;  
  block.innerHTML = `Площадь: ${area}`;  
}
createRandomBlock();  


// Генерируем случайное число от 0 до 100  
const randomNumber = getRandomInt(0, 100);  
let attempts = 0;  
let userGuess;  
while (userGuess !== randomNumber) {  
    userGuess = prompt("Введите ваше число от 0 до 100:");  
    userGuess = Number(userGuess);  
    attempts += 1;  
    if (isNaN(userGuess) || userGuess < 0 || userGuess > 100) {  
        alert("Пожалуйста, введите число от 0 до 100.");  
        continue;  
    }  
    const guessesDiv = document.getElementById("guesses");  
    const guessDiv = document.createElement("div");  
    guessDiv.className = "guess";  
    guessDiv.textContent = `Попытка ${attempts}: ${userGuess}`;  
    guessesDiv.appendChild(guessDiv);   
    if (userGuess > randomNumber) {  
        alert("Меньше! Попробуйте еще раз.");  
    } else if (userGuess < randomNumber) {  
        alert("Больше! Попробуйте еще раз.");  
    } else {  
        alert(`Поздравляем! Вы угадали число ${randomNumber} за ${attempts} попыток.`);  
        document.getElementById("result").textContent = `Вы угадали число ${randomNumber} за ${attempts} попыток.`;  
    }  
}  

let link = document.querySelector("a");
let arrHref = new Array ( "w1/index.html", 
  "w2/index.html", 
  "w3/index.html",
  "w4/index.html",
  "w5/index.html" );
link.href = arrHref[getRandomInt(0, 4)];
