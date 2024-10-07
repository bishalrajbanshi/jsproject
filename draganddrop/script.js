let lists = document.querySelectorAll('.list')
let left = document.querySelector('.left')
let right = document.querySelector('.right')
let select = null

for (let list of lists){
    //drag event
    list.addEventListener('dragstart',(e)=>{
        select = e.target
    })
}

// Prevent the default action on dragover for the right container
right.addEventListener('dragover',(e)=>{
    e.preventDefault()
})

//drop event
right.addEventListener('drop',(e)=>{
    right.appendChild(select)
    select = nul
})

//left drop
// Prevent the default action on dragover for the right container
left.addEventListener('dragover',(e)=>{
    e.preventDefault()
})

//drop event
left.addEventListener('drop',(e)=>{
   if(select){
    left.appendChild(select)
    select = null
   }
})