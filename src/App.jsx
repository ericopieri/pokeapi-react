import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Pokeball from "./components/Pokeball";
import Pokemons from "./pages/Pokemons";
import IndividualPokemon from "./pages/IndividualPokemon";

function App() {
    return (
        <Router>
            <div className="app">
                <Header />
                <main className="principal">
                    <Routes>
                        <Route path="/" element={<Pokemons />} />
                        <Route path="/:name" element={<IndividualPokemon />} />
                    </Routes>
                </main>
                <Pokeball />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
