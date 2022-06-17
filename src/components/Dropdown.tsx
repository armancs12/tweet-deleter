import clsx from "clsx";
import Link from "next/link";
import { FC, PropsWithChildren, useState } from "react";
import DropdownIcon from "./icons/DropdownIcon";

const classes = {
  item: {
    base: "px-4 h-10 w-full flex items-center text-sm font-semibold hover:bg-blue-400 hover:text-white",
    button: {
      active: "",
      disabled: "",
    },
  },
};

type DropdownButton = {
  type: "button";
  label: string;
  onClick?: () => void;
};

type DropdownLink = {
  type: "link";
  label: string;
  route: string;
};

type DropdownItem = DropdownButton | DropdownLink;

type Props = PropsWithChildren<{
  items: DropdownItem[];
}>;

const Dropdown: FC<Props> = ({ children, items }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <button
      className="flex items-center"
      onClick={() => setOpen((isOpen) => !isOpen)}
    >
      <div className="relative inline-flex items-center cursor-pointer text-sm">
        {children}
        <DropdownIcon />

        {isOpen && (
          <div className="absolute top-8 left-0 py-4 shadow-md shadow-slate-500 rounded-2xl z-10 whitespace-nowrap bg-white">
            {items.map((item) => (
              <>
                {item.type == "button" ? (
                  <button
                    className={clsx(
                      classes.item.base,
                      item.onClick
                        ? classes.item.button.active
                        : classes.item.button.disabled
                    )}
                    onClick={item.onClick}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link href={item.route} passHref>
                    <a className={clsx(classes.item.base)}>{item.label}</a>
                  </Link>
                )}
              </>
            ))}
          </div>
        )}
      </div>
    </button>
  );
};

export default Dropdown;
