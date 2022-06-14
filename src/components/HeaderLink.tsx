import clsx from "clsx";
import Link from "next/link";
import { FC } from "react";

const classes = {
  base: "relative flex h-full items-center font-semibold text-[17px] text-gray-600",
  active: "border-b-2 border-b-blue-400 text-blue-400",
};

type Props = {
  route: string;
  title: string;
  isActive: boolean;
};

const HeaderLink: FC<Props> = ({ title, route, isActive }) => (
  <Link href={route} passHref>
    <a className={clsx(classes.base, isActive && classes.active)}>{title}</a>
  </Link>
);

export default HeaderLink;
