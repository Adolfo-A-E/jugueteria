import React from 'react'

export const Personal = () => {
    return (
        <div>
            <section id="testimonios" class="testimonios seccion-clara">
                <h2 class="seccion-titulo"> Personal</h2>
                <h3 class="seccion-descripsion">Estos son algunos de nuestro personal</h3>


                <div id="testimonios-carrusel" class="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="container">
                                <img class="testimonio-imagen rounded-circle" src="./src/componentes/IMAGENES/personal/Guino.png" alt=" Foto de Guino"></img>
                                    <p class="testimonio-texto">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus omnis
                                        tempora, optio earum suscipit corporis a reiciendis odit explicabo veritatis nostrum vero. Possimus veniam
                                        voluptate cupiditate libero exercitationem quibusdam nesciunt.</p>
                                    <div class="testinomio-info">
                                        <p class="cliente">Guino</p>
                                        <p class="cargo">Gerente general</p>
                                    </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="container">
                                <img class="testimonio-imagen rounded-circle" src="./src/componentes/IMAGENES/personal/Nora.png" alt=" Foto de Nora"></img>
                                    <p class="testimonio-texto">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus omnis
                                        tempora, optio earum suscipit corporis a reiciendis odit explicabo veritatis nostrum vero. Possimus veniam
                                        voluptate cupiditate libero exercitationem quibusdam nesciunt.</p>
                                    <div class="testinomio-info">
                                        <p class="cliente">Nora</p>
                                        <p class="cargo">Gerente de ventas</p>
                                    </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="container">
                                <img class="testimonio-imagen rounded-circle" src="./src/componentes/IMAGENES/personal/Leonardo.png" alt=" Foto de Leonardo"></img>
                                    <p class="testimonio-texto">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus omnis
                                        tempora, optio earum suscipit corporis a reiciendis odit explicabo veritatis nostrum vero. Possimus veniam
                                        voluptate cupiditate libero exercitationem quibusdam nesciunt.</p>
                                    <div class="testinomio-info">
                                        <p class="cliente">Leonardo</p>
                                        <p class="cargo">Director general</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#testimonios-carrusel" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Anterior</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#testimonios-carrusel" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Siguiente</span>
                    </button>
                </div>
            </section>

        </div>
    )
}
