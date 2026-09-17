import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

function MainLayout() {
    return (
        <div>
            <NavBar />
            <main className="flex flex-col w-screen min-h-30 p-5">
                <Outlet /> 
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout


// the outlet component specifies where to render the child components (the different sides like Pokemon, Notes....)
// Coverpage does not belong here, it needs to be implemented one layer above!