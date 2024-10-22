

let userInput = document.getElementById('userinput')
let add = document.getElementById('add')
let list = document.getElementById('list')

let userInfo = []

add.addEventListener('click',(e)=>{
    e.preventDefault()
    const userVal = userInput.value.trim()
   if (userVal === '') {
    alert("empty field")
    return
   }

   userInfo.push(userVal)
   renderList(userVal,userInfo.length-1)
   userInput.value = ""

})

function renderList(item,index){
    const li = document.createElement('li')
    const del =  document.createElement('button')
    li.innerText = ""

    li.innerText = item
    del.innerText = "DEL"

    list.appendChild(li)
    li.appendChild(del)

    del.addEventListener('click',()=>{
        userInfo.splice(index,1)
        li.remove()
    })
}


















// let info = [];

// add.addEventListener('click',(e)=>{
//     e.preventDefault()

//    const inputValue = userInput.value.trim()
//    if (inputValue === '') {
//     alert('empty work')
//     return
//    }

//    //push the value in array
//    info.push(inputValue)
//    renderValue(inputValue,info.length -1)
//    userInput.value = ""
// })

// function renderValue(item,index){
//     const li = document.createElement('li')
//     const del = document.createElement('button')
//     del.classList.add('delbtn'); // Add delete button class

//     li.innerText = item //set the text for item list
//     del.innerText = "Delete"

//     li.appendChild(del) //appent the delete button on list item
//     list.appendChild(li) //appent the list item on list

//     del.addEventListener('click',()=>{
//         info.splice(index,1)
//         li.remove()
//     })


// }


