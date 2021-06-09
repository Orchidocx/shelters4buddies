import "./App.css";
import { Image, ImageShape, ImageSize } from "../../components/Image/Image.tsx";
import cat from "../../assets/cat.png";
function App() {
  return (
    <div className="app">
      <Image src={cat} size={ImageSize.xl} shape={ImageShape.ellipse} />
    </div>
  );
}

export default App;
