import "./Image.css";
function Image({ src, size = "sm", alt = "not provided", shape = "default" }) {
  return (
    <img
      className={`image image__${size} image__${shape}`}
      src={src}
      alt={alt}
    />
  );
}

export default Image;
