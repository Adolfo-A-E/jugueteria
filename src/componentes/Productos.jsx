import React from 'react'

export const Productos = () => {
    return (
        <div>
            <section id="productos" class="productos-recientes seccion-clara d-flex flex-column">
                <h2 class="seccion-titulo texto-negro">Productos de promocion</h2>
                <h3 class="seccion-descripsion">Estos son algunos productos que estan en promocion por fin de año........</h3>
                
                <div class="container text-center productos-contenedor">
                    <div class="row">

                        <div class="col-12 col-md-6 col-lg-4">
                            <div class="producto">
                                <img src="./src/componentes/IMAGENES/Productos/producto_1.png" alt="producto 1"></img>
                                    <div class="overlay">
                                        <p>Producto 1</p>
                                        <div class="iconos-contenedor">
                                            <a href="" target="_blank" rel="noopener noreferrer">
                                                <i class="bi bi-cart4"></i>
                                            </a>
                                        </div>
                                    </div>
                            </div>
                        </div>

                        <div class="col-12 col-md-6 col-lg-4">
                            <div class="producto">
                                <img src="./src/componentes/IMAGENES/Productos/producto_2.png" alt="producto 2"></img>
                                    <div class="overlay">
                                        <p>Producto 2</p>
                                        <div class="iconos-contenedor">
                                            <a href="" target="_blank" rel="noopener noreferrer">
                                                <i class="bi bi-cart4"></i>
                                            </a>
                                        </div>
                                    </div>
                            </div>
                        </div>

                        <div class="col-12 col-md-6 col-lg-4">
                            <div class="producto">
                                <img src="./src/componentes/IMAGENES/Productos/producto_3.png" alt="producto 3"></img>
                                    <div class="overlay">
                                        <p>Producto 3</p>
                                        <div class="iconos-contenedor">
                                            <a href="" target="_blank" rel="noopener noreferrer">
                                                <i class="bi bi-cart4"></i>
                                            </a>
                                        </div>
                                    </div>
                            </div>
                        </div>

                        <div class="col-12 col-md-6 col-lg-4">
                            <div class="producto">
                                <img src="./src/componentes/IMAGENES/Productos/producto_4.png" alt="producto 4"></img>
                                    <div class="overlay">
                                        <p>Producto 4</p>
                                        <div class="iconos-contenedor">
                                            <a href="" target="_blank" rel="noopener noreferrer">
                                                <i class="bi bi-cart4"></i>
                                            </a>
                                        </div>
                                    </div>
                            </div>
                        </div>

                        <div class="col-12 col-md-6 col-lg-4">
                            <div class="producto">
                                <img src="./src/componentes/IMAGENES/Productos/producto_5.png" alt="producto 5"></img>
                                    <div class="overlay">
                                        <p>Producto 5</p>
                                        <div class="iconos-contenedor">
                                            <a href="" target="_blank" rel="noopener noreferrer">
                                                <i class="bi bi-cart4"></i>
                                            </a>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-4">
                            <div class="producto">
                                <img src="./src/componentes/IMAGENES/Productos/producto_6.png" alt="producto 6"></img>
                                    <div class="overlay">
                                        <p>Producto 6</p>
                                        <div class="iconos-contenedor">
                                            <a href="" target="_blank" rel="noopener noreferrer">
                                                <i class="bi bi-cart4"></i>
                                            </a>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="" target="_blank" rel="noopener noreferrer">
                    <button type="button" class="btn btn-info">
                        Ver mas Productos
                        <i class="bi bi-arrow-right-circle-fill"></i>
                    </button>
                </a>
            </section>
        </div>
    )
}
