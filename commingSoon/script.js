let targetdate = new Date("oct 20, 2026 00:00:00").getTime()
let finaltime = document.querySelector(".finaltime")



function updatetime() {
    let currentdate = new Date().getTime()
    let timedifference = targetdate - currentdate
    //convert days ,time,minuits,hour
    let days = Math.floor(timedifference / (1000 * 60 * 60 * 24))
    let hour = Math.floor((timedifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minuits = Math.floor((timedifference % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((timedifference % (1000 * 60)) / 1000)


    let final = `Days : ${days} , Hours : ${hour} , Minuites : ${minuits} , Seconds : ${seconds}`
    finaltime.innerHTML = final

}
setInterval(updatetime, 1000)
updatetime()

