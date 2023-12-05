import { Outlet} from "react-router-dom"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"

function Layout() {
    
    

  return (
    <div className="md:px-20 lg:px-52 " >
        <NavBar/>

        <Outlet/>



        <Footer/> 
    </div>
  )
}

export default Layout