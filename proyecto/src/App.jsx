import GameFeed from "./components/GameFeed";
import Header from "./components/header";
import { AuthProvider } from "./components/AuthContext";
import { SearchBar } from "./components/barrabusqueda";
import "./App.css";
import { useState } from "react";

// Datos del buscador de Dylan
const SAMPLE_ITEMS = [
  { name: "React",      description: "Biblioteca JavaScript" },
  { name: "Vue",        description: "Framework progresivo" },
  { name: "Angular",    description: "Framework completo" },
  { name: "Svelte",     description: "Compilador de componentes" },
  { name: "Next.js",    description: "Framework de React" },
  { name: "Nuxt",       description: "Framework de Vue" },
  { name: "Astro",      description: "SSR moderno" },
  { name: "Node.js",    description: "Runtime JavaScript" },
  { name: "TypeScript", description: "JavaScript tipado" },
  { name: "Webpack",    description: "Bundler de módulos" },
];

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [lastSearch,    setLastSearch]    = useState("");

  const handleSearch = (results, searchTerm) => {
    setSearchResults(results);
    setLastSearch(searchTerm);
  };

  // Un solo return fusionando todo
  return (
    <AuthProvider>
      <div className="app">

        {/* Barra superior - Jesús */}
        <Header className="app__header-placeholder" />

        {/* Buscador - Dylan */}
        <SearchBar
          items={SAMPLE_ITEMS}
          onSearch={handleSearch}
          placeholder="Busca juegos..."
        />

        {/* Resultados del buscador (si hay búsqueda activa) */}
        {lastSearch && (
          <div className="results-section">
            {searchResults.length > 0 ? (
              <div className="results-grid">
                {searchResults.map((item, index) => (
                  <div key={index} className="result-card">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="no-results-message">No se encontraron resultados</p>
            )}
          </div>
        )}

        {/* Feed de juegos - Juliana/Tomás */}
        <main className="app__main">
          <GameFeed />
        </main>

      </div>
    </AuthProvider>
  );
}

export default App;