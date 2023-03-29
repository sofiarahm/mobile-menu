//Skapa ref till HTML-taggar
let menuIcon = document.querySelector('#js-menu-toggle');
let menuList = document.querySelector('#js-menu');
// console.log(menuList);

//Lägga på en lyssnare på menuIcon som lyssnar efter klick
menuIcon.addEventListener('click',function(){
    //vad ska hända när jag klickar
    // console.log('klick')
    menuList.classList.toggle('active');
    menuIcon.classList.toggle('exit');
})