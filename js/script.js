let nav = document.querySelector('nav')
let li = document.querySelector('nav > div:nth-child(2) > ul > li')


let scrollbut = document.createElement('div')
document.body.appendChild(scrollbut)
scrollbut.style.width = '30px'
scrollbut.style.height = '30px'
scrollbut.style.borderRadius = '10px'
scrollbut.style.border = 'solid'
scrollbut.style.backgroundColor = 'black'
scrollbut.style.position = 'absolute'
scrollbut.style.right = '40px'
scrollbut.style.bottom = '40px'
scrollbut.style.opacity = '0'


window.onscroll = () => {
    if(window.scrollY >= 60){
        nav.style.backgroundColor = 'gray'
        li.style.color = 'white'
        scrollbut.style.opacity = '1'
        
    } else if(window.scrollY < 60){
        nav.style.backgroundColor = 'white'
        scrollbut.style.opacity = '0'
    }
}


