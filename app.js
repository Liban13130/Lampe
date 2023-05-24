const button = document.getElementById('btn')
const lampe = document.getElementById('lamp')

function toggleBtn(){
    button.classList.toggle('active')
    lampe.classList.toggle('on')
}