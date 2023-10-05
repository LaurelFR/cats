import "./App.css";
import CatFacts from "./CatFacts";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="shadow mt-3">
          <h1 className="text-center">
            <i className="fa-solid fa-cat"></i> Cats{" "}
            <i className="fa-solid fa-cat"></i>
          </h1>
        </header>
        <CatFacts />
      </div>
    </div>
  );
}

export default App;
