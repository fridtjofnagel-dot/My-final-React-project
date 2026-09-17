import { AppState, AppContext } from './context'
import { MainLayout } from './layouts/MainLayout'
import { CoverLayout } from './layouts/CoverLayout'
import { Browserrouter, Router, Routes, Route } from 'react-router-dom'
 


function App() {
  return (
    <div>
      <AppState>
        <Routes>
          <Route>
            <Route path='./'
          </Route>
        </Routes>
      </AppState>
    </div>
  )
  }


export default App
