import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [cargando, setCargando] = useState(false);

  const fetchPokemons = async () => {
    setCargando(true);
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=807");
    const data = await response.json();
    setPokemons(data.results);
    setCargando(false);
  };


  const renderPokemons = () => {
    return (
      <ul className="lista-pokemons">
        {pokemons.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    );
  };

  return (
    <div className="container">
      <h1>Pokédex</h1>
      <button onClick={fetchPokemons} className="boton-fetch">
        Fetch Pokemon
      </button>
      {cargando ? (
        <p>Cargando...</p>) : pokemons.length > 0 ? (
          renderPokemons()) : (
        <p>Busca tus Pokemones...</p>
      )}
    </div>
  );
};

export default App;
