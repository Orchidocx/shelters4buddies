import "./App.css";
import Image from "../../components/Image/Image";
import cat from "../../assets/cat.png";
function App() {
  return (
    <div className="app">
      <Image src={cat} size="xl" />
    </div>
  );
}

export default App;
