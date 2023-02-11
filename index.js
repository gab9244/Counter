let title = document.getElementById('title')
let number = document.getElementById('number')
let Button = document.querySelectorAll('button')
let num = 0

function increasing(){
    number.innerText =num +=1
    number.style.color ='green'
}
function decreasing() {
    number.innerText = num -=1
    number.style.color ='red'
}
function reseting (){
    number.innerHTML = num=0
    number.style.color ='black'
}

function counter (valor) {
  if(valor == 'Increase'){
      return increasing()
    
  }
  if(valor == 'Decrease') {
    return decreasing()
  }
  if(valor == 'Reset') {
    return reseting()
  }
}

Button.forEach((btn) => {
    btn.addEventListener('click', () => {
         counter(btn.innerText)
    })
})



