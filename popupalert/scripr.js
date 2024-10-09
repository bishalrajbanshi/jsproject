let popup = document.querySelector('.popup')
let btn = document.querySelector('.btn')
let btn1 = document.querySelector('.btn1')


function openpopup(){
    popup.classList.add('open-popup')
}

function closepopup(){
    popup.classList.remove('open-popup')
}

btn.addEventListener('click',(e)=>{
    openpopup()
})
btn1.addEventListener('click',(e)=>{
    closepopup()
})