const navMobile=document.querySelector("#nav-mobile"),iconMenu=document.querySelector("#iconMenu");let clickMenu=!1;function menu(){clickMenu=0==clickMenu?(navMobile.classList.remove("header__nav__mobile--is--closed"),navMobile.classList.add("header__nav__mobile--is--open"),iconMenu.setAttribute("src","./dist/shared/image/icon/menux.svg"),!0):(navMobile.classList.remove("header__nav__mobile--is--open"),navMobile.classList.add("header__nav__mobile--is--closed"),iconMenu.setAttribute("src","./dist/shared/image/icon/menu.svg"),!1)}