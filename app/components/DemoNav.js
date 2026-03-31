import Link from "next/link";
const navItems = [
  {
    title: "Week 2",
    href: "week-2",
  },
  {
    title: "Week 3",
    href: "week-3",
  },
  {
    title: "Week 4",
    href: "week-4",
  },
  {
    title: "Week 5",
    href: "week-5",
  },
  {
    title: "Week 6",
    href: "week-6",
  },
  {
    title: "Week 7",
    href: "week-7",
  },
  {
    title: "Week 8",
    href: "week-8",
  },
];
export default function SiteNav() {
  return (
    <ul className="my-4 mx-6 text-2xl">
      {navItems.map((navItem) => {
        return (
          <li
            className="my-2 bg-stone-300 dark:bg-stone-600 p-4 rounded-xl"
            key={navItem.href}
          >
            <Link
              href={navItem.href}
              className="hover:text-blue-600 dark:hover:text-blue-300  duration-300 ease-linear"
            >
              {navItem.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
