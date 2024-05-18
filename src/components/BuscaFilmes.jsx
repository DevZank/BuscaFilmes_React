import React, { useState } from "react";
import "./BuscaFilmes.css";
import Logo from "../assets/Logo.webp";

function BuscaDeFilmes() {
  const [query, setQuery] = useState("");

  const [filmes, setFilmes] = useState([]);

  const [erro, setErro] = useState("");

  const buscarFilmes = async () => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?s=${query}&apikey=d7cacd58`
      );

      const data = await response.json();

      if (data.Response === "True") {
        setFilmes(data.Search);

        setErro("");
      } else {
        setFilmes([]);

        setErro(data.Error);
      }
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);

      setErro("Erro ao buscar filmes. Por favor, tente novamente mais tarde.");
    }
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    buscarFilmes();
  };

  return (
    <div className="MoviesContainer">
      <header>
        <h2 className="Logo">
          <img src={Logo} alt="Logo Filmix" /> FilMIX
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Nome do filme"
          />

          <button type="submit">
            Buscar <i class="ri-search-eye-line"></i>
          </button>
        </form>
      </header>

      {erro && <p className="Error">{erro}</p>}

      <div className="Movies">
        {filmes.map((filme) => (
          <div className="Movie" key={filme.imdbID}>
            <h3 className="MovieTitle">{filme.Title}</h3>
            <div className="MovieImage">
              <img src={filme.Poster} alt={filme.Title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BuscaDeFilmes;
