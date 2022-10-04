import React from 'react'
import Products from './Products'
import LocalProducts from './LocalProducts'


function Home({ name, location }) {
  return (
    <div> <h1>Este es el nuevo {name}</h1>
      <h4>Hecho con Amor en : {location}</h4>
      <hr/>
      <LocalProducts/>
      <Products/>
    </div>
  )
}

export default Home