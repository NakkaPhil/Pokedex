import './assets/css/index.css'
import {HashRouter, Route, Routes, Link} from 'react-router-dom'
import Intro from './components/Intro'
import Pokemons from './components/Pokemons'
import PokemonInfo from './components/PokemonInfo'
import ProtectedRoutes from './components/ProtectedRoutes'
function App() {
  

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' element={<Intro/>}/>

          <Route element={<ProtectedRoutes/>}>
            <Route path='/pokedex/' element={<Pokemons/>}/>
            <Route path='/pokedex/:id' element={<PokemonInfo/>}/>
          </Route>
          
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
