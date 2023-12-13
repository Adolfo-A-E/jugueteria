import { useState } from 'react'
import './App.css'
import { Barra_nav } from './componentes/Barra_nav'
import { Principal } from './componentes/Principal'
import { Quines_Somos } from './componentes/Quines_Somos'
import { Clientes } from './componentes/Clientes'
import { Productos } from './componentes/Productos'
import { Personal } from './componentes/Personal'
import { Contactos } from './componentes/Contactos'
import { Pie_de_pagina } from './componentes/Pie_de_pagina'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Barra_nav></Barra_nav>
      <Principal></Principal>
      <Quines_Somos></Quines_Somos>
      <Clientes></Clientes>
      <Productos></Productos>
      <Personal></Personal>
      <Contactos></Contactos>
      <Pie_de_pagina></Pie_de_pagina>
    </div>
    </>
  )
}

export default App
