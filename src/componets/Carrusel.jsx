import React from "react"
import { Children } from "react"
import "../styles/carrusel.css"
class Carrusel extends React.Component{
  
  render(){
      return  <div className="carrusel">
             <div className="carruselItem">
        <div className="card">
            <div className="card-content">
                <p className="card-title">Esta es una carta</p>
                <p>Soy una tarjata</p>
            </div>
        </div>
        </div>
        <div className="carruselItem">
        <div className="card">
            <div className="card-content">
                <p className="card-title">Esta es una carta</p>
                <p>Soy una tarjata</p>
            </div>
        </div>
        </div>
        <div className="carruselItem">
        <div className="card">
            <div className="card-content">
                <p className="card-title">Esta es una carta</p>
                <p>Soy una tarjata</p>
            </div>
        </div>
        </div>
      <div className="carruselItem">
        <div className="card">
            <div className="card-content">
                <p className="card-title">Esta es una carta</p>
                <p>Soy una tarjata</p>
            </div>
        </div>
        </div>
        <div className="carruselItem">
        <div className="card">
            <div className="card-content">
                <p className="card-title">Esta es una carta</p>
                <p>Soy una tarjata</p>
            </div>
        </div>
        </div>
        <div className="carruselItem">
        <div className="card">
            <div className="card-content">
                <p className="card-title">Esta es una carta</p>
                <p>Soy una tarjata</p>
            </div>
        </div>
        </div>
      </div>
  }
} 
export default Carrusel
