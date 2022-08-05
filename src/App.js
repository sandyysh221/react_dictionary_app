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
          This app was coded by Sandy Yu and is open-sourced on GitHub.
        </footer>
      </div>
    </div>
  );
}

export default App;
