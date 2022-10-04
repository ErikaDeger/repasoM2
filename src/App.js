import './App.css';
import React from 'react'
import { Route } from 'react-router-dom'

import About from './Components/About'
import Products from './Components/Products'
import LocalProducts from './Components/LocalProducts'
import NavBar from './Components/NavBar'
import Detail from './Components/Detail'
import Home from './Components/Home'
import Create from './Components/Create'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path='/'>
        <Home name={"Mercado Liberado"} location={'Ituzaingo'} />
      </Route>
      <Route exact path='/products' component={Products} />
      <Route exact path='/local' render={() => <LocalProducts />} />
      <Route exact path='/about' component={About} />
      <Route exact path='/create' component={Create} />
      <Route exact path='/product/:id' component={Detail} />

    </div>
  );
}

export default App;



