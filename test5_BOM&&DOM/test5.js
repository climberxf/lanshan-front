
let butt0=document.getElementsByClassName("button0")[0]
butt0.addEventListener('click',function(){
    
    let box_0=document.getElementsByClassName("box0")[0]
    let mess=document.getElementsByClassName("inputbox")[0].value
    let newone=document.createElement("div")
    let butt1=document.createElement("button")
    let butt2=document.createElement("button")
    let createtext=document.createTextNode(mess)

    box_0.appendChild(newone)
    newone.appendChild(butt1)
    newone.appendChild(createtext)
    newone.appendChild(butt2)

    newone.className='box2'
    butt1.innerText ="√"
    butt1.onclick=finish
    butt2.innerText ='X'
    butt2.onclick=delete1
    butt1.className="button1"
    butt2.className="button2"
})

function finish(){
    this.parentNode.style.textDecoration="line-through"
}

function delete1(){
    this.parentNode.parentNode.removeChild(this.parentNode)
}

