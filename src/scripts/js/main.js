const navMobile = document.querySelector('#nav-mobile');
const iconMenu = document.querySelector('#iconMenu');
let clickMenu  = false;


function menu(){
    if(clickMenu == false){
        navMobile.classList.remove('header__nav__mobile--is--closed');
        navMobile.classList.add('header__nav__mobile--is--open');
        iconMenu.setAttribute('src', './dist/shared/image/icon/menux.svg');
        clickMenu = true;
    }
    else{
        navMobile.classList.remove('header__nav__mobile--is--open');
        navMobile.classList.add('header__nav__mobile--is--closed');
        iconMenu.setAttribute('src', './dist/shared/image/icon/menu.svg');
        clickMenu = false
    }
}