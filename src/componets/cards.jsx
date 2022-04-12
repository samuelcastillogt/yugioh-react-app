import React from "react"
import "../styles/hero.css"
class Hero extends React.Component{
    constructor (props) {
        super(props)
        this.state={
            cartas: []
        }
    }
    consulta(){
        fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Decode%20Talker", {
            crossDomain: true,  method: 'GET',  headers: {'Content-Type':'application/json'
        }
    })
        .then((data)=>{
            console.log(data)
        }).catch((err)=>{
            console.log(err)
        })
    }
    render(){
        return <div className="hero">
            <input type="text" id="texto"/>
            <button className="btn indigo dark-4" onClick={ this.consulta }>Buscar Carta</button>
        </div>
    }
}
export default Hero
