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
    href: "week-5"
  }
];
export default function SiteNav() {
  return (
    <ul className="my-4 mx-6 text-2xl">
      <li className="my-2 bg-stone-300 dark:bg-stone-600 p-4 rounded-xl">
        <Link
          href="week-2"
          className="hover:text-blue-600 dark:hover:text-blue-300  duration-300 ease-linear"
        >
          Week 2
        </Link>
      </li>
      <li className="my-2 bg-stone-300 dark:bg-stone-600 p-4 rounded-xl">
        <Link
          href="week-3"
          className="hover:text-blue-600 dark:hover:text-blue-300  duration-300 ease-linear"
        >
          Week 3
        </Link>
      </li>
      <li className="my-2 bg-stone-300 dark:bg-stone-600 p-4 rounded-xl">
        <Link
          href="week-4"
          className="hover:text-blue-600 dark:hover:text-blue-300  duration-300 ease-linear"
        >
          Week 4
        </Link>
      </li>
      <li className="my-2 bg-stone-300 dark:bg-stone-600 p-4 rounded-xl">
        <Link
          href="week-5"
          className="hover:text-blue-600 dark:hover:text-blue-300  duration-300 ease-linear"
        >
          Week 5
        </Link>
      </li>
    </ul>
  );
}
