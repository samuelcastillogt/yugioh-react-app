import React from "react"
import { Link } from "react-router-dom"
function Header(){
    return (
        <header className="">
          <div className="nav-wrapper">
           <Link to="/" className="card-title">Yu-Gi-Oh React proyect</Link>
           
          </div>
         {/* <ul>
            <li>
              <Link  to="/sets">Buscar Sets</Link>
            </li> 
             </ul>*/}
         
        </header>
    )
}
export default Header