import "./App.css";

import Header from "./components/Header";
import Pokeball from "./components/Pokeball";

function App() {
    return (
        <div className="app">
            <Header />
            <div className="principal"></div>
            <Pokeball />
        </div>
    );
}

export default App;
