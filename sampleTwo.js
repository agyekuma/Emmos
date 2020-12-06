const burger_icon = document.querySelector('#nav-bar .nav-bar .nav-list .burger');
const nav_list = document.querySelector('#nav-bar .nav-bar .nav-list');


burger_icon.addEventListener('click',()=>{
    nav_list.classList.toggle('open');
    burger_icon.classList.toggle('active');
});