import clsx from "clsx";
import { FC } from "react";

type Props = React.ReactHTMLElement<HTMLButtonElement>["props"] & {
  type: keyof typeof classes["types"];
};

const classes = {
  base: "relative inline-flex items-center justify-center rounded-full font-semibold leading-5 whitespace-nowrap transition-colors ease-out duration-200 outline-none",
  types: {
    primary:
      "text-white bg-[rgb(29,161,242)] hover:bg-[rgb(12,133,207)] active:bg-[rgb(9,102,159)]",
    secondary:
      "border border-gray-300 bg-gray-100 text-blue-400 hover:bg-gray-200 active:bg-gray-300",
  },
};

const Button: FC<Props> = ({ type, children, className, ...props }) => {
  return (
    <button
      {...props}
      className={clsx(classes.base, classes.types[type], className)}
    >
      {children}
    </button>
  );
};

export default Button;
