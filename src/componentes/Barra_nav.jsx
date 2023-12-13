import React from 'react'

export const Barra_nav = () => {
  return (
    <nav class="navbar navbar-expand-md navbar-light">
      <div class="container-fluid">
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler"
          aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbar-toggler">
          <a class="navbar-brand" href="https://getbootstrap.com/docs/5.3/layout/columns/">
            
            <img src="./src/componentes/IMAGENES/icono_juguete.png" width="200"></img>
          </a>
          
          <ul class="navbar-nav d-flex justify-content-center align-items-center">
            <li class="nav-item">
              <a class="nav-link " aria-current="page" href="#sobre-mi">Quienes Somos</a>
            </li>
            <li class="nav-item">
              
              <a class="nav-link" href="#productos">Productos</a>
            </li>
            <li class="nav-item">
              
              <a class="nav-link" href="#testimonios">Personal</a>
            </li>
            <li class="nav-item">
              
              <a class="nav-link" href="#contactos">Contactos</a>
            </li>
          </ul>

          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="" aria-label="Search"></input>
              <button class="btn btn-outline-success" type="submit">Buscar</button>
          </form>
        </div>
      </div>
    </nav>
  )
}
