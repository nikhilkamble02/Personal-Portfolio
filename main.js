// $(document).ready(function(){
//     $('#menu').click(function(){
//         $(this).toggleClass('fa-times');
//         $('header').toggleClass('toggle');
//     })
//  $(window).on('scroll load' , function(){
//     $('#menu').removeClass('fa-times');
//     $('header').removeClass('toggle');
//  })


// })

document.addEventListener('DOMContentLoaded', function () {
    let menu = document.getElementById('menu');
    let header = document.querySelector('header');

    menu.addEventListener('click', function () {
        this.classList.toggle('fa-times');
        header.classList.toggle('toggle');
    });

    window.addEventListener('scroll', function () {
        menu.classList.remove('fa-times');
        header.classList.remove('toggle');
    });

    window.addEventListener('load', function () {
        menu.classList.remove('fa-times');
        header.classList.remove('toggle');
    });
});
