import "./App.css";
import { Image, ImageShape, ImageSize } from "../../components/Image/Image.tsx";
import cat from "../../assets/cat.png";
function App() {
  return (
    <div className="app">
      <Image src={cat} size={ImageSize.xs} shape={ImageShape.ellipse} />
      <Image src={cat} size={ImageSize.sm} shape={ImageShape.ellipse} />
      <Image src={cat} size={ImageSize.md} shape={ImageShape.ellipse} />
      <Image src={cat} size={ImageSize.lg} shape={ImageShape.ellipse} />
      <Image src={cat} size={ImageSize.xl} shape={ImageShape.ellipse} />
      <br />
      <Image src={cat} size={ImageSize.xs} shape={ImageShape.default} />
      <Image src={cat} size={ImageSize.sm} shape={ImageShape.default} />
      <Image src={cat} size={ImageSize.md} shape={ImageShape.default} />
      <Image src={cat} size={ImageSize.lg} shape={ImageShape.default} />
      <Image src={cat} size={ImageSize.xl} shape={ImageShape.default} />
      <br />
      <Image src={"cat"} size={ImageSize.xs} shape={ImageShape.default} />
      <Image src={"cat"} size={ImageSize.sm} shape={ImageShape.default} />
      <Image src={"cat"} size={ImageSize.md} shape={ImageShape.default} />
      <Image src={"cat"} size={ImageSize.lg} shape={ImageShape.default} />
      <Image src={"cat"} size={ImageSize.xl} shape={ImageShape.default} />
      <br />
      <Image src={"cat"} size={ImageSize.xs} shape={ImageShape.ellipse} />
      <Image src={"cat"} size={ImageSize.sm} shape={ImageShape.ellipse} />
      <Image src={"cat"} size={ImageSize.md} shape={ImageShape.ellipse} />
      <Image src={"cat"} size={ImageSize.lg} shape={ImageShape.ellipse} />
      <Image src={"cat"} size={ImageSize.xl} shape={ImageShape.ellipse} />
    </div>
  );
}

export default App;
