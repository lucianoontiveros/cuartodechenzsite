import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar'
const LayoutPublic = () => { 
    
    return(
        <div className="containerLayout">
            <Outlet />
        </div>
        

    )
 }

 export default LayoutPublic