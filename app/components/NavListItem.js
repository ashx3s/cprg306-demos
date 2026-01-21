import Link from "next/link";
export default function NavListItem({ title, pageLink, repoLink }) {
  return (
    <li className="my-2 mx-4 p-4 rounded-2xl bg-stone-800 w-1/3">
      <strong className="text-xl">{title}</strong>
      <br />
      <Link
        href={pageLink}
        className="hover:text-amber-500 text-blue-300 underline underline-offset-2"
      >
        View Page
      </Link>
      <br />
      <Link
        href={repoLink}
        target="_blank"
        className="hover:text-amber-500 text-blue-300 underline underline-offset-2"
      >
        View Code
      </Link>
    </li>
  );
}
