const qrimg = document.getElementById('qrimg')
const btn = document.getElementById('btn')
const qrtext = document.getElementById('qrtext')
const imgbox = document.getElementById('imgbox')

function qrGenerator(){
    btn.addEventListener('click',(e)=>{
        const inpval = qrtext.value.trim()
       if (inpval) {
        qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(inpval) 
        imgbox.classList.add("showimg")
       }
       else{
        alert("enter the text to generate code")
       }
    
     })

}

qrGenerator()
