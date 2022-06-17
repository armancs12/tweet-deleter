import clsx from "clsx";
import Link from "next/link";
import React, { FC } from "react";

const classes = {
  root: {
    base: "relative flex h-full items-center pr-1 font-semibold text-sm",
    active: "text-blue-400 border-b-2 border-b-blue-400",
    notActive: "text-gray-500",
  },
  icon: {
    base: "mr-1",
    active: "text-blue-400",
    notActive: "text-gray-400",
  },
};

type Props = {
  isActive: boolean;
  label: string;
  route: string;
  Icon: () => JSX.Element;
};

const DashboardNavLink: FC<Props> = ({ isActive, label, route, Icon }) => {
  return (
    <Link href={route} passHref>
      <a
        aria-current="page"
        className={clsx(
          classes.root.base,
          isActive ? classes.root.active : classes.root.notActive
        )}
      >
        <span
          className={clsx(
            classes.icon.base,
            isActive ? classes.icon.active : classes.icon.notActive
          )}
        >
          <Icon />
        </span>
        {label}
      </a>
    </Link>
  );
};

export default DashboardNavLink;
