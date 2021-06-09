import "./Image.css";

type ImageProps = {
  src: string;
  size?: string;
  alt?: string;
  shape?: string;
};

const ImageSize = {
  xs: "xs",
  sm: "sm",
  md: "md",
  lg: "lg",
  xl: "xl",
};

// TODO: Add css support for additional shapes
const ImageShape = {
  default: "default",
  ellipse: "ellipse",
};

function Image({
  src,
  size = ImageSize.sm,
  alt = "not provided",
  shape = ImageShape.default,
}: ImageProps) {
  return (
    <img
      className={`image image__${size} image__${shape}`}
      src={src}
      alt={alt}
    />
  );
}

export { ImageSize, ImageShape, Image };
