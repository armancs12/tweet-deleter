import { useRouter } from "next/router";
import DashboardNavLink from "./DashboardNavLink";
import CogIcon from "./icons/CogIcon";
import GiftIcon from "./icons/GiftIcon";
import SearchIcon from "./icons/SearchIcon";
import SkullIcon from "./icons/SkullIcon";
import TrashIcon from "./icons/TrashIcon";

const DASHBOARD_NAV_LINKS = [
  {
    label: "Search and delete",
    route: "/dashboard/search-and-delete",
    Icon: SearchIcon,
  },
  {
    label: "Set up auto",
    route: "/dashboard/set-up-auto",
    Icon: CogIcon,
  },
  {
    label: "Delete all",
    route: "/dashboard/delete-all",
    Icon: TrashIcon,
  },
  {
    label: "Upload archive",
    route: "/upload-archive/start",
    Icon: GiftIcon,
  },
  {
    label: "See deleted tweets",
    route: "/upload-archive/start",
    Icon: SkullIcon,
  },
];

const DashboardNav = () => {
  const router = useRouter();

  return (
    <section className="relative flex h-16 w-full max-w-full items-center justify-center px-4 shadow-sm lg:mt-8 bg-gray-100">
      <nav className="hide-scrollbars grid h-full grid-flow-col items-center gap-8 overflow-x-scroll whitespace-nowrap lg:gap-12">
        {DASHBOARD_NAV_LINKS.map(({ label, route, Icon }) => (
          <DashboardNavLink
            key={route}
            route={route}
            label={label}
            Icon={Icon}
            isActive={route === router.pathname}
          />
        ))}
        <div className="h-full w-4 md:hidden"></div>
      </nav>
      <div className="absolute bg-gradient-to-r from-transparent to-gray-100 right-0 h-full w-20 "></div>
    </section>
  );
};

export default DashboardNav;
