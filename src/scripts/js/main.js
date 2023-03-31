//elements
const navMobile = document.querySelector('#nav-mobile');
const iconMenu = document.querySelector('#iconMenu');
const buttonMovieSooon = document.getElementById("em-breve");
const buttonMoviesReleased = document.getElementById("ja-lacados");
const filmesContainer= document.querySelector('.show__filmes__container');
const thumbnail = document.querySelector('.thumbnail');
const showFilmes = document.querySelector('#movies');
const sinopse = document.querySelector('#sinopse');
const elenco = document.querySelector('#elenco--vozes');
const dublagem = document.querySelector('#dublagem_brasileira');
const recepcao = document.querySelector('#recepcao');
const trilhaSonora = document.querySelector('#trilha_sonora');


let showFilmesRound = Math.round(showFilmes.getBoundingClientRect().y);
let sinopseRound = Math.round(sinopse.getBoundingClientRect().y);
let elencoRound = Math.round(elenco.getBoundingClientRect().y);
let dublagemRound = Math.round(dublagem.getBoundingClientRect().y);
let recepcaoRound = Math.round(recepcao.getBoundingClientRect().y);
let trilhaSonoraRound = Math.round(trilhaSonora.getBoundingClientRect().y);

console.log(showFilmesRound);
console.log(sinopseRound);
console.log(elencoRound);
console.log(dublagemRound);
console.log(recepcaoRound);
console.log(trilhaSonoraRound);

//consts of the program
const contentMovieReleased = `<div class="show__filmes__container__item">
                                <img src="./dist/shared/images/transformes-1.jpg" alt=" transformes-1">
                            </div>

                            <div class="show__filmes__container__item">
                                <img src="./dist/shared/images/transformers-2-revenge-of-the-falen.jpg" alt="transformers 2 revenge of the falen">
                            </div>

                            <div class="show__filmes__container__item">
                                <img src="./dist/shared/images/Transformers-O-Lado-culto-da-Lua.jpg" alt="Transformers O Lado culto da Lua">
                            </div>

                            <div class="show__filmes__container__item">
                                <img src="./dist/shared/images/Transformers-Age-of-Extinction.jpg" alt="Transformers Age of Extinction">
                            </div>

                            <div class="show__filmes__container__item">
                                <img src="./dist/shared/images/Transformers-The-Last-Knight.jpg" alt="Transformers The Last Knight">
                            </div>

                            <div class="show__filmes__container__item">
                                <img src="./dist/shared/images/bumvlebee.jpg" alt="bumvlebee">
                            </div>`;

const contentMovieSooon = `<div class="show__filmes__container__item">
                                <img src="./dist/shared/images/transformers8_2.jpg" alt="Transformers: O Despertar das Feras">
                            </div>`;

let clickMenu  = false;


function clickButtonHeader(index){
    isActive(index);
}

document.addEventListener('scroll', function(){
console.log(window.scrollY)


    if(0 <= window.scrollY && window.scrollY < showFilmesRound){
        isActive(null);
    }
    else if(showFilmesRound <= window.scrollY && window.scrollY < sinopseRound){
        isActive(0);
    }
    else if( sinopseRound <= window.scrollY && window.scrollY < elencoRound){
        isActive(1);
    }
    else if(elencoRound <=  window.scrollY && window.scrollY < dublagemRound){
        isActive(2);
    }
    else if(recepcaoRound <= window.scrollY && window.scrollY < trilhaSonoraRound){
        isActive(4);
    }
    else if(trilhaSonoraRound <= window.scrollY && window.scrollY < 2000){
        isActive(5);
    }
    
})

function isActive(index){
    const buttons = document.querySelectorAll('[data-link-button-a]');

    for(let i = 0; i < buttons.length; i ++){
        buttons[i].classList.remove("header__nav__a--is--active");
    }

    if(index != null){

        buttons[index].classList.add('header__nav__a--is--active');
    
        if(index == 3 || index == 2){
            buttons[index == 3? 2: 3].classList.add('header__nav__a--is--active')
        }   
    }
}



function menu(){
    if(clickMenu == false){
        navMobile.classList.remove('header__nav__mobile--is--closed');
        navMobile.classList.add('header__nav__mobile--is--open');
        iconMenu.setAttribute('src', './dist/shared/images/icon/menux.svg');
        clickMenu = true;
    }
    else{
        navMobile.classList.remove('header__nav__mobile--is--open');
        navMobile.classList.add('header__nav__mobile--is--closed');
        iconMenu.setAttribute('src', './dist/shared/images/icon/menu.svg');
        clickMenu = false
    }
}

function buttonSectionShowFilmes(identifier){
    if(identifier == "em-breve"){
        buttonMovieSooon.classList.add('button--is--active');
        buttonMoviesReleased.classList.remove('button--is--active');
        filmesContainer.innerHTML = contentMovieSooon;    
    }
    else{
        buttonMoviesReleased.classList.add('button--is--active');
        buttonMovieSooon.classList.remove('button--is--active'); 
        filmesContainer.innerHTML = contentMovieReleased;   
    }
}
