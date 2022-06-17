import Link from "next/link";
import FacebookGrayIcon from "./icons/FacebookGrayIcon";
import TwitterGrayIcon from "./icons/TwitterGrayIcon";
import YoutubeGrayIcon from "./icons/YoutubeGrayIcon";

const FOOTER_LINKS = [
  { label: "Features", route: "/features" },
  { label: "Pricing", route: "/pricing" },
  { label: "Blog", route: "/blog" },
  { label: "Help", route: "/faq" },
  { label: "About us", route: "/about-us" },
  { label: "Contact us", route: "/contact-us" },
];

const Footer = () => {
  return (
    <footer className="bottom-0 w-full">
      <div className="py-8 md:py-12 bg-gray-500">
        <nav className="flex md:flex-row max-w-7xl mx-auto px-4">
          {FOOTER_LINKS.map(({ label, route }) => (
            <Link className="" key={route} href={route} passHref>
              <a className="text-gray-100 mb-4 md:mr-8 md:mb-auto text-[17px] hover:underline">
                {label}
              </a>
            </Link>
          ))}
        </nav>
      </div>
      <div className="bg-gray-600 pt-8 pb-32 border-t border-gray-500 text-center">
        <div className="inline-grid grid-flow-col gap-4">
          <a href="#">
            <TwitterGrayIcon />
          </a>
          <a href="#">
            <FacebookGrayIcon />
          </a>
          <a href="#">
            <YoutubeGrayIcon />
          </a>
        </div>
        <div className="mt-8 text-xs text-gray-400">
          © 2022 Tweet Deleter. All Rights Reserved
          <br />
          Please note that tweets you select to delete through{" "}
          {process.env.NEXT_PUBLIC_HOST} service are deleted permanently from
          Twitter without an option to restore them!
        </div>
        <div className="mt-2">
          <Link href={"/terms-of-service"} passHref>
            <a className="text-gray-100 text-xs">Terms of service</a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
