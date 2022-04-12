import React from 'react';

const Search = (props) => {
    const setFiltro = props.setFiltro
    const filtrar = (e)=>{
        setFiltro(e.target.value)
    }
    return (
        <div className='search'>
            <div className="searchContainer">
                <input type="text" placeholder='ID de la carta' onChange={filtrar}/>    
            </div>
        </div>
    );
};

export default Search;