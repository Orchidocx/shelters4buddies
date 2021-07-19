import React from "react";
import "./Button.css";

type ButtonProps = {
  name: string;
  size?: Number;
  shape?: Number;
  onClick?: () => void;
};

enum ButtonSize {
  xs,
  sm,
  md,
  lg,
  xl,
}

enum ButtonShape {
  default, // no border-radius
  pill, // rounded; border-radius approximately ~15%
}

const Button = ({
  name = "Button",
  size = ButtonSize.md,
  shape = ButtonShape.default,
  onClick = () => {},
}: ButtonProps) => (
  <button type="button" className={`button buttonSize${size} buttonShape${shape}`} onClick={onClick}>{name}</button>
);

export { Button, ButtonSize, ButtonShape };
