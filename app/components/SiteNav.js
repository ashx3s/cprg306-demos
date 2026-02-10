import Link from "next/link";
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
    </ul>
  );
}
