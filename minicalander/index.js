function updatedValue(){
    let date = document.querySelector('.date')
let day = document.querySelector('.day')
let month = document.querySelector('.month')
let year = document.querySelector('.year')

const updateTime = new Date()

const weekDays = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]

const monthes = ["january","february","march","april","may","june","july","august","september","octuber","november","december"]

date.innerHTML = updateTime.getDate()
day.innerHTML = weekDays[updateTime.getDay()]
month.innerHTML = monthes[updateTime.getMonth()]
year.innerHTML = updateTime.getFullYear()
}
setInterval(updatedValue,1000)
updatedValue()