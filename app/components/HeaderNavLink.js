import Link from "next/link";
export default function HeaderNavLink({ href, text }) {
  return (
    <li>
      <Link
        href={href}
        target="_none"
        className="hover:text-blue-600 dark:hover:text-blue-300 duration-300 ease-linear text-lg"
      >
        {text}
      </Link>
    </li>
  );
}
