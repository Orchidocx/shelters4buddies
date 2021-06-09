import React, { useState } from "react";
import "./Image.css";

type ImageProps = {
  src: string;
  size?: Number;
  alt?: string;
  shape?: Number;
};

enum ImageSize {
  xs,
  sm,
  md,
  lg,
  xl,
}

// TODO: Add css support for additional shapes
enum ImageShape {
  default,
  ellipse,
}

function Image({
  src,
  size = ImageSize.sm,
  alt = "not provided",
  shape = ImageShape.default,
}: ImageProps) {
  const [isValidImage, setIsValidImage] = useState(true);

  return isValidImage ? (
    <img
      className={`image image__size${size} image__shape${shape}`}
      src={src}
      alt={alt}
      onError={() => {
        setIsValidImage(false);
      }}
    />
  ) : (
    <div
      className={`nullImage nullImage__size${size} nullImage__shape${shape}`}
    ></div>
  );
}

export { ImageSize, ImageShape, Image };
