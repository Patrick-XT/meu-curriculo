
export default function initMenuFixo(){

}

function menuFixo(){
  const nav = document.querySelector(".navbar-default")
  nav.classList.toggle("sticky", window.scrollY > 0) 
}

menuFixo()

window.addEventListener("scroll", menuFixo)