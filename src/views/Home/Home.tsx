import "./Home.css";
import { Image, ImageShape, ImageSize } from "../../components/Image/Image";
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
      <Image src={cat} size={ImageSize.xs} shape={ImageShape.ellipse} />
      <Image src={cat} size={ImageSize.sm} shape={ImageShape.ellipse} />
      <Image src={cat} size={ImageSize.md} shape={ImageShape.ellipse} />
      <Image src={cat} size={ImageSize.lg} shape={ImageShape.ellipse} />
      <br />
      <Image src={cat} size={ImageSize.xs} />
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
