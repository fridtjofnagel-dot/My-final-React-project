import { AppContext } from './context/AppContext'
import { AppState } from './context/AppState'
import MainLayout from './layouts/MainLayout'
import Coverpage from './pages/Coverpage'
import Home from './pages/Home'
import Note from './pages/Note'
import Pokemon from './pages/Pokemon'
import HiddenSite from './pages/HiddenSite'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nasa from './pages/Nasa'
 


function App() {
  return (
    <div>
      <BrowserRouter>
      <AppState>
        <Routes>        
            <Route index element={<Coverpage />}/>
            <Route path="/HiddenSite" element={<HiddenSite />} />
          <Route path='/' element={<MainLayout />}>
            <Route path='/Home' element= {<Home />} />  
            <Route path='Notes' element={<Note />}/>
            <Route path='Pokemon' element={<Pokemon />}/>
            <Route path='Nasa' element={<Nasa />}/>
          </Route>
        </Routes>
      </AppState>
      </BrowserRouter>
    </div>
  )
}


export default App



// The elements are the pages!!!! Not the components in componentsfolders! In the pages the components are bundled