import "./Home.css";
import {
  Img,
  Image,
  ImageShape,
  ImageSize,
  Button,
  ButtonShape,
  ButtonSize,
} from "../../components";
import cat from "../../assets/cat.png";
function Home() {
  return (
    <main className="home">
      <h1 className="home__title">Shelters 4 Buddies</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sint
        repudiandae iure harum odio recusandae atque dolorum debitis incidunt,
        dolore aperiam maxime ducimus dolor vel quibusdam unde numquam nostrum
        voluptate?
      </p>
      <Button name="Learn More" size={ButtonSize.xs} />
      <Button name="Learn More" size={ButtonSize.sm} />
      <Button name="Learn More" />
      <Button name="Learn More" size={ButtonSize.lg} />
      <Button name="Learn More" size={ButtonSize.xl} />
      <Button name="Learn More" size={ButtonSize.xs} shape={ButtonShape.pill} />
      <Button name="Learn More" size={ButtonSize.sm} shape={ButtonShape.pill} />
      <Button name="Learn More" shape={ButtonShape.pill} />
      <Button name="Learn More" size={ButtonSize.lg} shape={ButtonShape.pill} />
      <Button name="Learn More" size={ButtonSize.xl} shape={ButtonShape.pill} />
      <Image src={cat} size={ImageSize.xs} shape={ImageShape.ellipse} />
      <Image src={cat} size={ImageSize.sm} shape={ImageShape.ellipse} />
      <Image src={cat} size={ImageSize.md} shape={ImageShape.ellipse} />
      <Image src={cat} size={ImageSize.lg} shape={ImageShape.ellipse} />
      <br />
      <Img.Image src={cat} size={ImageSize.xs} />
      <Image src={cat} size={ImageSize.sm} />
      <Image src={cat} size={ImageSize.md} />
      <Image src={cat} size={ImageSize.lg} />
      <br />
      <Image src={"cat"} size={ImageSize.xs} />
      <Image src={"cat"} size={ImageSize.sm} />
      <Image src={"cat"} size={ImageSize.md} />
      <Image src={"cat"} size={ImageSize.lg} />
      <br />
      <Image src={"cat"} size={ImageSize.xs} shape={ImageShape.ellipse} />
      <Image src={"cat"} size={ImageSize.sm} shape={ImageShape.ellipse} />
      <Image src={"cat"} size={ImageSize.md} shape={ImageShape.ellipse} />
      <Image src={"cat"} size={ImageSize.lg} shape={ImageShape.ellipse} />
    </main>
  );
}

export default Home;
