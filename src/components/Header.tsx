import Link from "next/link";
import HeaderLink from "./HeaderLink";
import DropdownIcon from "./icons/DropdownIcon";
import LogoIcon from "./icons/LogoIcon";
import MenuIcon from "./icons/MenuIcon";

const HEADER_LINKS = [
  { title: "Features", route: "/features" },
  { title: "Pricing", route: "/pricing" },
  { title: "Help", route: "/faq" },
  { title: "Dashboard", route: "/dashboard" },
];

const Header = () => {
  return (
    <header className="mx-auto max-w-xlarge flex h-16 w-full max-w-screen-xl flex-row justify-between px-4 lg:mt-8 lg:h-12">
      <Link href={"/"} passHref>
        <a aria-current="page" className="flex items-center">
          <LogoIcon />
        </a>
      </Link>
      <div className="flex items-center">
        <nav className="hidden grid-flow-col items-center gap-8 lg:grid">
          {HEADER_LINKS.map(({ title, route }) => (
            <HeaderLink
              key={route}
              route={route}
              title={title}
              isActive={route === "/features"}
            />
          ))}
          <div>
            <div className="inline-flex h-12 items-center justify-center px-2 py-1.5 text-sm">
              <div className="flex">
                <button
                  page-name="profile"
                  className="relative flex items-center"
                >
                  <img
                    src="http://pbs.twimg.com/profile_images/1441865911611297797/nm0NZiHM_bigger.jpg"
                    alt="User profile image"
                    className="mr-1 rounded-full rtl:ml-1"
                    width="36"
                    height="36"
                  />
                  <span
                    page-name="profile"
                    className="text-base-10 font-normal ml-2 rtl:ml-0 rtl:mr-2"
                  >
                    Serhat
                  </span>
                  <DropdownIcon />
                </button>
                <button className="bg-base-95 relative ml-2 inline-flex h-9 items-center justify-center rounded-full px-4 font-semibold outline-none border border-gray-300 bg-gray-100 hover:bg-gray-300 text-blue-400 transition-colors duration-200 ease-out ">
                  <div
                    className="flex items-center justify-center"
                    style={{ visibility: "visible" }}
                  >
                    Sign out
                  </div>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <button className="flex flex-row items-center lg:hidden">
        <MenuIcon />
      </button>
    </header>
  );
};

export default Header;
