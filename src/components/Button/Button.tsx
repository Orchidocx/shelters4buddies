import React from "react";
import "./Button.css";

type ButtonProps = {
  name: string;
  size?: Number;
  shape?: Number;
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
}: ButtonProps) => (
  <div className={`button buttonSize${size} buttonShape${shape}`}>{name}</div>
);

export { Button, ButtonSize, ButtonShape };
