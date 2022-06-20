import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "./Button";
import HeaderLink from "./HeaderLink";
import DropdownIcon from "./icons/DropdownIcon";
import LogoIcon from "./icons/LogoIcon";
import MenuIcon from "./icons/MenuIcon";
import TwitterIcon from "./icons/TwitterIcon";

const HEADER_LINKS = {
  base: [
    { label: "Features", route: "/features" },
    { label: "Pricing", route: "/pricing" },
    { label: "Help", route: "/faq" },
  ],
  authenticated: [{ label: "Dashboard", route: "/dashboard" }],
};

const Header = () => {
  const router = useRouter();
  const { data, status } = useSession();
  const isLoading = status === "loading";
  const isAuthenticated = status === "authenticated" && data != null;

  const routes = [
    ...HEADER_LINKS.base,
    ...(isAuthenticated ? HEADER_LINKS.authenticated : []),
  ];

  return (
    <header className="mx-auto max-w-xlarge flex h-16 w-full max-w-screen-xl flex-row justify-between px-4 lg:mt-8 lg:h-12">
      <Link href={"/"} passHref>
        <a aria-current="page" className="flex items-center">
          <LogoIcon />
        </a>
      </Link>
      <div className="flex items-center">
        <nav className="hidden grid-flow-col items-center gap-8 lg:grid">
          {routes.map(({ label, route }) => (
            <HeaderLink
              key={route}
              route={route}
              title={label}
              isActive={router.asPath.startsWith(route)}
            />
          ))}
          <div>
            <div className="inline-flex h-12 items-center justify-center px-2 py-1.5 text-sm">
              <div className="flex">
                {isAuthenticated ? (
                  <>
                    <button
                      page-name="profile"
                      className="relative flex items-center"
                    >
                      <Image
                        src={data.user!.image!}
                        alt="User profile image"
                        className="mr-1 rounded-full"
                        width="36"
                        height="36"
                      />
                      <span page-name="profile" className="font-normal ml-2">
                        {data.user!.name!}
                      </span>
                      <DropdownIcon />
                    </button>
                    <Button
                      type="secondary"
                      className="px-4 ml-2"
                      onClick={() => signOut()}
                    >
                      <div
                        className="flex items-center justify-center"
                        style={{ visibility: "visible" }}
                      >
                        Sign out
                      </div>
                    </Button>
                  </>
                ) : (
                  <Button
                    type="secondary"
                    className="px-4 h-[52px] text-[17px]"
                    onClick={() => signIn("twitter")}
                  >
                    <TwitterIcon />
                    <span className="ml-2">Sign in with Twitter</span>
                  </Button>
                )}
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
