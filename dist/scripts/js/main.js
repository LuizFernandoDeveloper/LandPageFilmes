const navMobile=document.querySelector("#nav-mobile"),iconMenu=document.querySelector("#iconMenu"),buttonMovieSooon=document.getElementById("em-breve"),buttonMoviesReleased=document.getElementById("ja-lacados"),filmesContainer=document.querySelector(".show__filmes__container"),thumbnail=document.querySelector(".thumbnail"),showFilmes=document.querySelector("#movies"),sinopse=document.querySelector("#sinopse"),elenco=document.querySelector("#elenco--vozes"),dublagem=document.querySelector("#dublagem_brasileira"),recepcao=document.querySelector("#recepcao"),trilhaSonora=document.querySelector("#trilha_sonora");let showFilmesRound=Math.round(showFilmes.getBoundingClientRect().y),sinopseRound=Math.round(sinopse.getBoundingClientRect().y),elencoRound=Math.round(elenco.getBoundingClientRect().y),dublagemRound=Math.round(dublagem.getBoundingClientRect().y),recepcaoRound=Math.round(recepcao.getBoundingClientRect().y),trilhaSonoraRound=Math.round(trilhaSonora.getBoundingClientRect().y);console.log(showFilmesRound),console.log(sinopseRound),console.log(elencoRound),console.log(dublagemRound),console.log(recepcaoRound),console.log(trilhaSonoraRound);const contentMovieReleased=`<div class="show__filmes__container__item">
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
                            </div>`,contentMovieSooon=`<div class="show__filmes__container__item">
                                <img src="./dist/shared/images/transformers8_2.jpg" alt="Transformers: O Despertar das Feras">
                            </div>`;let clickMenu=!1;function clickButtonHeader(e){isActive(e)}function isActive(e){var o=document.querySelectorAll("[data-link-button-a]");for(let e=0;e<o.length;e++)o[e].classList.remove("header__nav__a--is--active");null!=e&&(o[e].classList.add("header__nav__a--is--active"),3!=e&&2!=e||o[3==e?2:3].classList.add("header__nav__a--is--active"))}function menu(){clickMenu=0==clickMenu?(navMobile.classList.remove("header__nav__mobile--is--closed"),navMobile.classList.add("header__nav__mobile--is--open"),iconMenu.setAttribute("src","./dist/shared/images/icon/menux.svg"),!0):(navMobile.classList.remove("header__nav__mobile--is--open"),navMobile.classList.add("header__nav__mobile--is--closed"),iconMenu.setAttribute("src","./dist/shared/images/icon/menu.svg"),!1)}function buttonSectionShowFilmes(e){"em-breve"==e?(buttonMovieSooon.classList.add("button--is--active"),buttonMoviesReleased.classList.remove("button--is--active"),filmesContainer.innerHTML=contentMovieSooon):(buttonMoviesReleased.classList.add("button--is--active"),buttonMovieSooon.classList.remove("button--is--active"),filmesContainer.innerHTML=contentMovieReleased)}document.addEventListener("scroll",function(){console.log(window.scrollY),0<=window.scrollY&&window.scrollY<showFilmesRound?isActive(null):showFilmesRound<=window.scrollY&&window.scrollY<sinopseRound?isActive(0):sinopseRound<=window.scrollY&&window.scrollY<elencoRound?isActive(1):elencoRound<=window.scrollY&&window.scrollY<dublagemRound?isActive(2):recepcaoRound<=window.scrollY&&window.scrollY<trilhaSonoraRound?isActive(4):trilhaSonoraRound<=window.scrollY&&window.scrollY<2e3&&isActive(5)});