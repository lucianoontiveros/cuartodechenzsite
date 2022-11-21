import { Outlet } from 'react-router-dom'
import Footer from '../footer'
import NavBar from '../NavBar'
const LayoutPublic = () => { 
    
    return(
        <div className="containerLayout">
            <NavBar />
            <Outlet />
        </div>
        

    )
 }

 export default LayoutPublic