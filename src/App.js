import "./App.css";
import Image from "./components/Image/Image";
import cat from "./assets/cat.png";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Image src={cat} />
      </header>
    </div>
  );
}

export default App;
