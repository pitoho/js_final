
const button1 = document.getElementById("btn1");
const select1 = document.getElementById("select1");
const img = document.querySelector('.img')
const sub = document.querySelector('.submit')
let counter = 0;
    const btn = document.getElementById("btn");
    const counterElement = document.getElementById("counter");

    btn.addEventListener("click", () => {
      counter++;
      counterElement.textContent = counter;

        if (counter > 5) {
            console.log(img)
            img.className = 'bg-color-change'
        }
    });

select1.addEventListener("change", () => {
  console.log(`Выбрано значение: ${select1.value}`);
});

function showValues() {
    const res = document.querySelector('.res')
    const que = document.getElementById("que").value;
    let val = 'в смысле'
    let message
    let output
    if(que.indexOf(val.toLowerCase()) > -1){
        message = `Ваш вопрос: ${que}, мой ответ:`;
        output = document.createElement("p");
        output.textContent = message;
        res.appendChild(output);
        res.className = 'correct'
    }else{
        message = `Неверный вопрос`;
        output = document.createElement("p");
        output.textContent = message;
        res.appendChild(output);
        res.className = 'incorrect'
    }
    

    return false;
}
function updateTag(e) {
    const tagType = document.getElementById("select1").value;
    const second = document.querySelector('.second')

    switch (tagType) {
        case "гусь":
            second.style.width = '200px'
            second.style.backgroundImage = "url('images/goose.gif')"
            console.log('s')
            break;
        case "корова":
            second.style.backgroundImage = "url('images/cow.gif')"
            second.style.width = '400px'
            console.log('s')
            break;
        case "мопс":
            second.style.width = '200px'
            second.style.backgroundImage = "url('images/pug.gif')"
            console.log('s')
            break;
        default:
            second.style.width = '200px'
            second.style.backgroundImage = "url('images/cat.gif')"
            break;
    }
    

}
select1.addEventListener("change", updateTag);

const slider = document.querySelector('.slider');
const sliderInput = slider.querySelector('.slider-input');
const sliderValue = slider.querySelector('.slider-value');
const sl = document.querySelector('.sl')
sliderInput.addEventListener('input', (e) => {
  const value = e.target.value;
  if(value <= 33){
    sl.style.backgroundImage = "url('/images/blackchel.jpg')"
  }else if(value > 33 && value <=66){
    sl.style.backgroundImage = "url('/images/middlechel.jpg')"
  }else if(value > 66 && value <= 100){
    sl.style.backgroundImage = "url('/images/bluechel.jpg')"
  }
  sliderValue.innerHTML = value;
});