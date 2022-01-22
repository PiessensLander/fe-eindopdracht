document.addEventListener("DOMContentLoaded",function(){
    let searchBtn = document.querySelector('.c-nav__link--search');
    let input = document.querySelector('.c-nav__search-input');

    searchBtn.addEventListener("click",function(){
        input.classList.toggle('open');
    })
})