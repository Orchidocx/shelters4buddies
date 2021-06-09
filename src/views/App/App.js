import "./App.css";
import {Image, ImageShape, ImageSize} from "../../components/Image/Image";
import cat from "../../assets/cat.png";

function App() {
  return (
    <div className="app">
      <Image src={cat} size={ImageSize.XLarge} shape={ImageShape.Ellipse}/>
    </div>
  );
}

export default App;
