import React, {useEffect, useState} from 'react';
import Header from '../componets/header';
import Search from '../componets/Search';
import API from "../api/api.json"
import Carta from '../componets/Carta';
const Home = () => {
    const [state, setState] = useState(API.data)
    const [filtro, setFiltro] = useState()
    const [carta, setCarta] = useState()
    function filtrada(item){
        return item.id == filtro
    }
    useEffect(()=>{
       const datos = state.filter(filtrada)
       setCarta(datos)
       console.log(datos)
    }, [filtro])
    return (
        <React.Fragment>
            <Search setFiltro={setFiltro}/>
            {/* {filtro.length == 0  && <h2>Aqui aparece tu carta</h2>}
            {(carta && carta.length == 0 && && filtro && filtro.length >= 1 ) && <h2>Validando el ID</h2>} */}
            <div className="result">
                 {carta && carta.map(item => <Carta 
                                                name={item.name} 
                                                img={item.card_images[0].image_url} 
                                                desc={item.desc} 
                                                sets={item.card_sets}
                                                atk={item.atk}
                                                def={item.def}
                                                />)}
            </div>
           
            
        </React.Fragment>
    );
};

export default Home;