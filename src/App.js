import "./App.css";
import Dictionary from "./Containers/Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header text-center">Dictionary App 📖</header>
        <main>
          <Dictionary defaultKeyword="rainbow" />
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
