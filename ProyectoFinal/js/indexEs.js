let prueba = document.getElementById("langbtn");
prueba.addEventListener("click" , test);
function test(e){
let value = localStorage.getItem("languaje")
switch (value){
    case "en":
    case null:
e.preventDefault();
    localStorage.setItem("languaje" , "es");
    document.body.innerHTML =
    `
            <a href="" id="top"></a>
            <header class="position-sticky top-0 nav--z-index">
                <nav class=" container-fluid navbar navbar-expand-lg bg-dark p-0">
                    <div class="container-fluid p-2 pb-1">
                        <div class="container-fluid d-flex justify-content-between p-0 m-0">
                            <a href="inicio.html"><img src="img/wax.svg" class="logo--size" alt="Logo"></a>
                            <a class="navbar-brand active align-self-center text-center text-wrap p-0 m-0 nav__brandEs--size nav__brandFont--size nav__brand--justify link--color" href="inicio.html"><strong>El Librero Errante Woric Leatherbound</strong></a>
                            <button class="navbar-dark navbar-toggler shadow-none p-0" type="button" data-bs-toggle="offcanvas" data-bs-target=".navbarSupportedContent" aria-controls=".navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        <div class="offcanvas offcanvas-start navbar-collapse navbarSupportedContent bg-dark border-0 nav__sidemenu--size nav__list--visibility">
                            <ul class="navbar-nav justify-content-lg-end align-items-lg-center px-3 px-lg-0 me-auto mb-2 mb-lg-0 nav__list--size">
                                <li class="nav-item">
                                    <a class="nav-link active link--color" aria-current="page" href="inicio.html">Inicio</a>
                                </li>
                                <li class="nav-item dropdown bg-dark rounded">
                                    <div class="btn-group">
                                        <a class="nav-link active link--color" href="historias.html">Historias</a>
                                        <span class="nav-link dropdown-toggle dropdown-toggle-split color-primary px-1 ps-lg-0" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span class="visually-hidden">Toggle Dropdown</span>
                                        </span>
                                        <ul class="dropdown-menu bg-dark border-primary nav__stories--size">
                                            <li>
                                                <a class="dropdown-item link-primary bg-dark active link--color" href="stories/grimBronEs.html">- Grimund Bronzeheart</a>
                                            </li>
                                            <li><hr class="dropdown-divider link-primary"></li>
                                            <li>
                                                <a class="dropdown-item link-primary bg-dark active link--color" href="stories/liZhuEs.html">- Li Zhu</a>
                                            </li>
                                            <li><hr class="dropdown-divider link-primary"></li>
                                            <li>
                                                <a class="dropdown-item link-primary bg-dark active link--color" href="stories/dainThunEs.html">- Dain Thundermaster</a>
                                            </li>
                                            <li><hr class="dropdown-divider link-primary"></li>
                                            <li>
                                                <a class="dropdown-item link-primary bg-dark active link--color" href="stories/bharashEs.html">- Bharash</a>
                                            </li>
                                            <li><hr class="dropdown-divider link-primary"></li>
                                            <li>
                                                <a class="dropdown-item link-primary bg-dark active link--color" href="stories/bratBersEs.html">- Bratoslav Bersk</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active link--color" href="nosotros.html">Nosotros</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active link--color" href="appsEs.html">Apps</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active link--color" href="contacto.html">Contacto</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link d-none d-lg-block" href="index.html">
                                        <img class="rounded" src="img/ingles.jpg" alt="English">
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div class="d-flex justify-content-end">
                    <div class="nav-link active position-absolute d-lg-none bg-dark border-primary rounded-pill p-1 m-1 link--color nav__langFont--size border nav__lang--opacity" id="langbtn" href="">English</div>
                </div>
            </header>
            <img src="img/infiniteArchive.jpg" alt="El Archivo Infinito" class="w-100 hero--size hero--fit">
            <section class="d-flex justify-content-center flex-wrap text-center m-0 px-2">
                <h1 class="w-100 fw-bold mt-1 mb-0">El Librero Errante</h1>
                <article class="d-sm-flex align-items-sm-center m-3 my-2 mb-md-3">
                    <picture class="px-sm-2">
                        <source media="(min-width: 576px)" srcset="img/woric.jpg">
                        <img src="img/woricMobile.jpg" alt="Woric Leatherbound" class="justify-content-center align-self-center border border-4 shadow intro__img--size index__img--border">
                    </picture>
                    <p class="mb-1 p-1 pt-3 text__paragraph--align text--size">Hola, mi nombre es <em>Woric Leatherbound</em>, y soy un enano. También soy un librero errante. Como enano, me gustan las cosas bien hechas. Como librero, me aseguro de que la historia de cualquier heroe esté disponible para quien la requiera. Como viajante recorro todos los caminos, grandes o pequeños, para conocer nuevos aventureros, heroes, familias y quienquiera que se pueda beneficiar de mis servicios. Así que, nos vemos en el camino, aventurero.</p>
                </article>
            </section>
            <div class="text-center bg-primary text-primary my-1 mx-auto break--size">Aguanten los Dragones!</div>
            <section class="d-flex justify-content-center flex-wrap text-center px-2 m-0">
                <h2 class="text-center fw-bold w-100 my-2">El Archivo</h2>
                <article class="d-sm-flex align-items-sm-center m-3 mt-3 my-2 mb-md-3">
                    <a href="stories/grimBronEs.html">
                        <picture class="px-sm-2">
                            <source media="(min-width: 576px)" srcset="img/grimund.jpg">
                            <img src="img/grimundMobile.jpg" alt="Grimund Bronzeheart" class="justify-content-center align-self-center border border-4 shadow intro__img--size index__img--border">
                        </picture>
                    </a>
                    <div class="text-align-lg-start mb-1 p-1 pt-3 text__paragraph--align text--size">
                        <h3 class="text-center text-md-start"><a href="stories/grimBronEs.html" class="text-decoration-none">Grimund Bronzeheart</a></h3>
                        <p>Grimund Bronzeheart: un enano, demasiado pálido, pero aun así, un enano. Con 1,4m y 122kg es grande y pesado, incluso para los estándares de su raza. Su nariz, larga; su pelo blanco y su barba roja como el fuego. Cubre sus ojos lo mejor que puede con su capucha; son amarillos, rojizos quizas.</p>
                    </div>
                </article>
                <article class="d-sm-flex align-items-sm-center m-3 my-2 mb-md-3">
                    <a href="stories/liZhuEs.html" class="order-1">
                        <picture class="px-sm-2">
                            <source media="(min-width: 576px)" srcset="img/liZhu.jpg">
                            <img src="img/liZhuMobile.jpg" alt="Li Zhu" class="justify-content-center align-self-center border border-4 shadow intro__img--size index__img--border">
                        </picture>
                    </a>
                    <div class="order-0 mb-1 p-1 pt-3 text__paragraph--align text--size">
                        <h3 class="text-center text-md-end"><a href="stories/grimBronEs.html" class="text-decoration-none">Li Zhu</a></h3>
                        <p class="d-flex justify-content-end">Li Xue y Yang Baozhai eran originarios de Yumai, un pequeño pueblo en las montañas del este. Se ganaban la vida como pastores de cabras de montaña y vivían en una pequeña cabaña algo alejada del pueblo, en las tierras de Chen Qiang, un terrateniente amigo de Li Xue desde pequeños. La cabaña de los padres de Li Zhu era pequeña, por lo cual, durante las últimas semanas del embarazo Chen Qiang los invito a vivir a la casa principal, donde tendrían más espacio para el momento del nacimiento. Li Zhu nació durante la noche y su padre lo nombro así por la fuerza de los gritos del pequeño.</p>
                    </div>
                </article>
                <article class="d-sm-flex align-items-sm-center m-3 my-2 mb-md-2 mb-lg-3">
                    <a href="stories/dainThunEs.html">
                        <picture class="px-sm-2">
                            <source media="(min-width: 576px)" srcset="img/dainUncovered.jpg">
                            <img src="img/dainMobile.jpg" alt="Dain Thundermaster" class="justify-content-center align-self-center border border-4 shadow intro__img--size index__img--border">
                        </picture>
                    </a>
                    <div class="mb-sm-1 p-1 pt-3 text__paragraph--align text--size">
                        <h3 class="text-center text-md-start"><a href="stories/grimBronEs.html" class="text-decoration-none">Dain Thundermaster</a></h3>
                        <p class="mb-1">Dain fue el más joven de los 10 niños de Rangrim y Anbera, del clan Thundermaster. Dain fue el último varón en nacer de la treceava generación de Thundermasters, 15 años después de la rebelión de esclavos que separó al clan durante más de 100 años.</p>
                    </div>
                </article>
            </section>
            <div class="text-center bg-primary text-primary my-1 mx-auto break--size">Aguanten los Dragones!</div>
            <section class="container my-3">
                <h3 class="row justify-content-center text-center fw-bold my-1 pb-2">
                    Más Páginas
                </h3>
                <div class="carousel row col-10 col-sm-8 col-md-6 col-lg-4 col-xxl-3 slide mx-auto my-2" data-bs-ride="carousel" data-bs-interval="false">
                    <div class="carousel-indicators m-auto">
                        <button type="button" data-bs-target=".carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target=".carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <a href="stories/bharashEs.html" class="fs-4 text-decoration-none link--color">
                                <div class="bg-dark card card--border">
                                    <div class="card-body text-decoration-none shadow m-0 p-0">
                                        <p class="card-text text-center m-0 p-0">Bharash</p>
                                    </div>
                                    <img src="img/bharash.jpg" class="img-fluid m-0 p-0 img--border" alt="Bharash">
                                </div>
                            </a>
                        </div>
                        <div class="carousel-item">
                            <a href="stories/bratBersEs.html" class="fs-4 text-decoration-none link--color">
                                <div class="bg-dark card card--border">
                                    <div class="card-body text-decoration-none shadow m-0 p-0">
                                        <p class="card-text text-center m-0 p-0">Bratoslav Bersk</p>
                                    </div>
                                    <img src="img/bratoslav.jpg" class="img-fluid m-0 p-0 img--border" alt="Bratoslav Bersk">
                                </div>
                            </a>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target=".carousel" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target=".carousel" data-bs-slide="next" >
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
            <a href="#top" class="position-fixed text-dark fs-1 backTop--position"><i class="bi bi-arrow-up-circle-fill backTop--opacity"></i></a>
            <footer class="d-flex flex-wrap justify-content-between align-items-center bg-dark text-primary p-1">
                <a href="inicio.html"><img src="img/wax.svg" alt="Logo" class="logo--size"></a>
                <a href="mapaSitio.html"  class="text-decoration-none fw-bolder link--color">Mapa del Sitio</a>
                <a href="https://www.instagram.com/wan.lib/" class="link--color"><i class="bi bi-instagram fs-3"></i></a>
                <strong class="w-100 text-end footer__text--size footer__font--size">Desarrollado por Diego Gabrielli</strong>
            </footer>
            <script src="js/bootstrap.bundle.min.js"></script>
            <script src="js/indexEs.js"></script>
    `;
    prueba = document.getElementById("langbtn");
    prueba.addEventListener("click" , test);

    break;
    case "es":
        e.preventDefault();
    localStorage.setItem("languaje" , "en");
    document.body.innerHTML =
    `
    <a href="" id="top"></a>
    <header class="position-sticky top-0 nav--z-index">
        <nav class=" container-fluid navbar navbar-expand-lg bg-dark p-0">
            <div class="container-fluid p-2 pb-1">
                <div class="container-fluid d-flex justify-content-between p-0 m-0">
                    <a href="index.html"><img src="img/wax.svg" class="logo--size" alt="Logo"></a>
                    <a class="navbar-brand active align-self-center text-center text-wrap p-0 m-0 nav__brand--size nav__brandFont--size nav__brand--justify link--color" href="index.html"><strong>The Wandering Librarian Woric Leatherbound</strong></a>
                    <button class="navbar-dark navbar-toggler shadow-none p-0" type="button" data-bs-toggle="offcanvas" data-bs-target=".navbarSupportedContent" aria-controls=".navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div class="offcanvas offcanvas-start navbar-collapse navbarSupportedContent bg-dark border-0 nav__sidemenu--size nav__list--visibility">
                    <ul class="navbar-nav justify-content-lg-end align-items-lg-center px-3 px-lg-0 me-auto mb-2 mb-lg-0 nav__list--size">
                        <li class="nav-item">
                            <a class="nav-link active link--color" aria-current="page" href="index.html">Home</a>
                        </li>
                        <li class="nav-item dropdown bg-dark rounded">
                            <div class="btn-group">
                                <a class="nav-link active link--color" href="stories.html">Stories</a>
                                <span class="nav-link dropdown-toggle dropdown-toggle-split color-primary px-1 ps-lg-0" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span class="visually-hidden">Toggle Dropdown</span>
                                </span>
                                <ul class="dropdown-menu bg-dark border-primary nav__stories--size">
                                    <li>
                                        <a class="dropdown-item link-primary bg-dark active link--color" href="stories/grimBronEn.html">- Grimund Bronzeheart</a>
                                    </li>
                                    <li><hr class="dropdown-divider link-primary"></li>
                                    <li>
                                        <a class="dropdown-item link-primary bg-dark active link--color" href="stories/liZhuEn.html">- Li Zhu</a>
                                    </li>
                                    <li><hr class="dropdown-divider link-primary"></li>
                                    <li>
                                        <a class="dropdown-item link-primary bg-dark active link--color" href="stories/dainThunEn.html">- Dain Thundermaster</a>
                                    </li>
                                    <li><hr class="dropdown-divider link-primary"></li>
                                    <li>
                                        <a class="dropdown-item link-primary bg-dark active link--color" href="stories/bharashEn.html">- Bharash</a>
                                    </li>
                                    <li><hr class="dropdown-divider link-primary"></li>
                                    <li>
                                        <a class="dropdown-item link-primary bg-dark active link--color" href="stories/bratBersEn.html">- Bratoslav Bersk</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active link--color" href="aboutUs.html">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active link--color" href="apps.html">Apps</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active link--color" href="contact.html">Contact</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link d-none d-lg-block langbtn" href="">
                                <img class="rounded" src="img/español.jpg" alt="Español">
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="d-flex justify-content-end">
            <a class="nav-link active position-absolute d-lg-none bg-dark border-primary rounded-pill p-1 m-1 link--color nav__langFont--size border nav__lang--opacity langbtn" id="langbtn" href="">Español</a>
        </div>
    </header>
    <img src="img/infiniteArchive.jpg" alt="The Infinite Archive" class="w-100 hero--size hero--fit">
    <section class="d-flex justify-content-center flex-wrap text-center m-0 px-2">
        <h1 class="w-100 fw-bold mt-1 mb-0">The Wandering Librarian</h1>
        <article class="d-sm-flex align-items-sm-center m-3 my-2 mb-md-3">
            <picture class="px-sm-2">
                <source media="(min-width: 576px)" srcset="img/woric.jpg">
                <img src="img/woricMobile.jpg" alt="Woric Leatherbound" class="justify-content-center align-self-center border border-4 shadow intro__img--size index__img--border">
            </picture>
            <p class="mb-1 p-1 pt-3 text__paragraph--align text--size">Hello, my name is <em>Woric Leatherbound</em>, and I'm a dwarf. I'm also a wandering librarian. As a dwarf, I like things well done. As a librarian, I make sure that any hero's story is available to anyone who asks for it. As a wanderer I travel all roads, big or small, to meet new adventurers, heroes, families and anyone else that can benefit from my services. So, I'll be seeing you on the road, adventurer.</p>
        </article>
    </section>
    <div class="text-center bg-primary text-primary my-1 mx-auto break--size">Dragons Rock!</div>
    <section class="d-flex justify-content-center flex-wrap text-center m-0 px-2 pb-0">
        <h2 class="text-center fw-bold w-100 my-2">The Archive</h2>
        <article class="d-sm-flex align-items-sm-center m-3 mt-3 my-2 mb-md-3">
            <a href="stories/grimBronEn.html">
                <picture class="px-sm-2">
                    <source media="(min-width: 576px)" srcset="img/grimund.jpg">
                    <img src="img/grimundMobile.jpg" alt="Grimund Bronzeheart" class="justify-content-center align-self-center border border-4 shadow intro__img--size index__img--border">
                </picture>
            </a>
            <div class="text-align-lg-start mb-1 p-1 pt-3 text__paragraph--align text--size">
                <h3 class="text-center text-md-start"><a href="stories/grimBronEn.html" class="text-decoration-none">Grimund Bronzeheart</a></h3>
                <p>Grimund Bronzeheart: a dwarf, way too pale to be one, but one still. At 1,4m and 122kg he’s big and heavy, even by dwarven standards. His nose long, his hair white and his beard fiery red. He covers his eyes as best as his hood allows him, they’re yellow, reddish perhaps.</p>
            </div>
        </article>
        <article class="d-sm-flex align-items-sm-center m-3 my-2 mb-md-3">
            <a href="stories/liZhuEn.html" class="order-1">
                <picture class="px-sm-2">
                    <source media="(min-width: 576px)" srcset="img/liZhu.jpg">
                    <img src="img/liZhuMobile.jpg" alt="Li Zhu" class="justify-content-center align-self-center border border-4 shadow intro__img--size index__img--border">
                </picture>
            </a>
            <div class="order-0 mb-1 p-1 pt-3 text__paragraph--align text--size">
                <h3 class="text-center text-md-end"><a href="stories/liZhuEn.html" class="text-decoration-none">Li Zhu</a></h3>
                <p class="d-flex justify-content-end">Li Xue and Yang Baozhai were denizens of Yumai, a little town on the Eastern mountains. They made their living as mountain goats herders and lived in a small shack somewhat removed from the town, on Chen Qiang’s lands, a landlord and a childhood friend of Li Xue. Li Zhu’s parent’s shack was small, so, during the last few weeks of the pregnancy, Chen Qiang invited them to the main house, where they would have more space for the birth. Li Zhu was born during the night and his father gave him his name because of the power of his screams.</p>
            </div>
        </article>
        <article class="d-sm-flex align-items-sm-center m-3 my-2 mb-md-2 mb-lg-3">
            <a href="stories/dainThunEn.html">
                <picture class="px-sm-2">
                    <source media="(min-width: 576px)" srcset="img/dainUncovered.jpg">
                    <img src="img/dainMobile.jpg" alt="Dain Thundermaster" class="justify-content-center align-self-center border border-4 shadow intro__img--size index__img--border">
                </picture>
            </a>
            <div class="mb-sm-1 p-1 pt-3 text__paragraph--align text--size">
                <h3 class="text-center text-md-start"><a href="stories/dainThunEn.html" class="text-decoration-none">Dain Thundermaster</a></h3>
                <p class="mb-1">Dain was the youngest of Rangrim and Anbera of Clan Thundermaster’s children. He was the last male boy to be born in the thirteenth generation of Thundermasters, 15 years after the rebellion of salves that separated the clan for more than a hundred years.</p>
            </div>
        </article>
    </section>
    <div class="text-center bg-primary text-primary my-1 mx-auto break--size">Dragons Rock!</div>
    <section class="container my-3">
        <h3 class="row justify-content-center text-center fw-bold my-1 pb-2">
            More Pages
        </h3>
        <div class="carousel row col-10 col-sm-8 col-md-6 col-lg-4 col-xxl-3 slide mx-auto my-2" data-bs-ride="carousel" data-bs-interval="false">
            <div class="carousel-indicators m-auto">
                <button type="button" data-bs-target=".carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target=".carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <a href="stories/bharashEn.html" class="fs-4 text-decoration-none link--color">
                        <div class="card bg-dark card--border">
                            <div class="card-body text-decoration-none shadow m-0 p-0">
                                <p class="card-text text-center m-0 p-0">Bharash</p>
                            </div>
                            <img src="img/bharash.jpg" class="img-fluid m-0 p-0 img--border" alt="Bharash">
                        </div>
                    </a>
                </div>
                <div class="carousel-item">
                    <a href="stories/bratBersEn.html" class="fs-4 text-decoration-none link--color">
                        <div class="card bg-dark card--border">
                            <div class="card-body text-decoration-none shadow m-0 p-0">
                                <p class="card-text text-center m-0 p-0">Bratoslav Bersk</p>
                            </div>
                            <img src="img/bratoslav.jpg" class="img-fluid m-0 p-0 img--border" alt="Bratoslav Bersk">
                        </div>
                    </a>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target=".carousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target=".carousel" data-bs-slide="next" >
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </section>
    <a href="#top" class="position-fixed text-dark fs-1 backTop--position"><i class="bi bi-arrow-up-circle-fill backTop--opacity"></i></a>
    <footer class="d-flex flex-wrap justify-content-between align-items-center bg-dark text-primary p-1">
        <a href="index.html"><img src="img/wax.svg" alt="Logo" class="logo--size"></a>
        <a href="siteMap.html"  class="text-decoration-none fw-bolder link--color">Site Map</a>
        <a href="https://www.instagram.com/wan.lib/" class="link--color"><i class="bi bi-instagram fs-3"></i></a>
        <strong class="w-100 text-end footer__text--size footer__font--size">Developed by Diego Gabrielli</strong>
    </footer>
    <script src="js/bootstrap.bundle.min.js"></script>
    <script src="js/indexEs.js"></script>
    `;prueba = document.getElementById("langbtn");
    prueba.addEventListener("click" , test);
    break;
}
    };