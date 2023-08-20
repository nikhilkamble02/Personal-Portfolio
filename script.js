function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


// document.querySelector('.theme').addEventListener('click',
// function(){
//   document.body.classList.toggle('dark-mode')
//   document.getElementsByTagName('a').map((a)=>{
//     a.classList.toggle('whiteText')
//   })
// })
// console.log( document.getElementsByTagName('a'))
