import Link from "next/link";
import HeaderNavLink from "./HeaderNavLink";
export default function SiteHeader() {
  const navLinks = [
    {
      href: "https://nextjs.org/",
      text: "NextJS Docs",
    },
    {
      href: "https://tailwindcss.com",
      text: "Tailwind",
    },
    {
      href: "https://sd-web-2.vercel.app/",
      text: "Course Site",
    },
  ];
  return (
    <header className="flex gap-4 justify-between py-4 px-8">
      <div>
        {/* TODO: Add ICON */}
        <Link href="/">Site Logo</Link>
      </div>
      {/* TODO: Links to External Resources */}
      <nav>
        <ul className="flex gap-4">
          {/* TODO: Decide if we want to make separate components */}
          <HeaderNavLink {...navLinks[0]} />
          <HeaderNavLink {...navLinks[1]} />
          <HeaderNavLink {...navLinks[2]} />
        </ul>
      </nav>
    </header>
  );
}
