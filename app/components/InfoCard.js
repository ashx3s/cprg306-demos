import Link from "next/link";
export default function InfoCard({ name, description, href, linkText }) {
  return (
    <article className="my-2 mx-4 lg:my-4 lg:mx-8">
      <h3 className="text-lg font-semibold md:text-xl xl:text-2xl mb-2 lg:mb-4">
        {name}
      </h3>
      <p className="md:text-lg mb-2 max-w-prose">{description}</p>
      <Link
        href={href}
        className="px-3 py-2 bg-blue-200 dark:bg-blue-800 hover:bg-blue-500 hover:dark:bg-blue-900
        hover:text-white rounded-lg block w-fit"
      >
        {linkText}
      </Link>
    </article>
  );
}
