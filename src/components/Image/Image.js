import "./Image.css";

const ImageSize = {
  Small: 'sm',
  Medium: 'md',
  Large: 'lg',
  XLarge: 'xl'
}

// TODO: Add css support for additional shapes
const ImageShape = {
  Default: 'default',
  Ellipse: 'ellipse',
}

function Image({ src, size = ImageSize.Small, alt = "not provided", shape = ImageShape.Default }) {
  return (
    <img
      className={`image image__${size} image__${shape}`}
      src={src}
      alt={alt}
    />
  );
}

export {
  ImageSize,
  ImageShape,
  Image
}
