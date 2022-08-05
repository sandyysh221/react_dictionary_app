import "./App.css";
import SearchEngine from "./Components/SearchEngine";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header text-center">Dictionary App 📖</header>
        <main>
          <SearchEngine />
        </main>
        <footer className="App-footer text-center">
          This app was coded by{" "}
          <a href="https://sandyysh221.netlify.app/">Sandy Yu</a> and is
          open-sourced on{" "}
          <a
            href="https://github.com/sandyysh221/react_dictionary_app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          .
        </footer>
      </div>
    </div>
  );
}

export default App;
