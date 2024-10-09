
function timeUpdate() {
    let date = new Date()
    let setTime = document.getElementById('updateTime')

    let hour = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()


    hour = hour < 10 ? '0' + hour : hour
    min = min < 10 ? '0' + min : min
    sec = sec < 10 ? '0' + sec : sec

    let time = `${hour} : ${min} : ${sec}`


    setTime.innerText = time

}
setInterval(timeUpdate, 1000)

function updateYear() {
    let date = new Date()

    let setYear = document.getElementById('updateyear')
    let year = date.getFullYear()
    //Months are 0-indexed, so add 1
    let month = String(date.getMonth() + 1).padStart(2, '0')
    let day = String(date.getDate()).padStart(2, 0)
    let fullyear = `${year} : ${month} : ${day}`

    setYear.innerText = fullyear
}
updateYear()
// Update the date every hour
setInterval(updateYear,3600000)




//note String():
//The String() function is used to convert the number returned by date.getMonth() + 1 and date.getDate() into a string. This is necessary because the padStart() method is a string method, meaning it only works on strings, not numbers. By converting the number to a string, we can use the padStart() method to format the output.padStart(2, '0'):
//<!--padStart(2, '0') ensures that the month and day are always two digits.
// The 2 specifies that the resulting string should have a minimum length of 2 characters.
// The '0' is the character that will be added to the start of the string if it is less than 2 characters long. -->