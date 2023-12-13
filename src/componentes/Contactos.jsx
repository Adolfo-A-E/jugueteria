import React from 'react'

export const Contactos = () => {
    return (
        <div>
            <section id="contactos" class="contacto seccion-oscura">
                <div class="container">
                    <div class="container text-center rectangulo d-flex justify-content-evenly">
                        <div class="row">
                            <div class="col-12 col-md-4 seccion-titulo">
                                Hablemos !
                            </div>
                            <div class="col-12 col-md-4 descripsion">
                                Contactanos realizamos entregas a domicilio
                            </div>
                            <div class="col-12 col-md-4">
                                <a href="https://web.whatsapp.com/">
                                    <button type="button">
                                        Contacto
                                        <i class="bi bi-whatsapp"></i>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
