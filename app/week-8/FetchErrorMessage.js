import Link from "next/link";
export default function FetchErrorMessage({ error }) {
  return (
    <section className="flex flex-col justify-center items-center h-full bg-red-700">
      <h2 className="text-5xl">Error</h2>
      <p>{error}</p>
      <Link
        href="/"
        className="bg-white text-red-700 px-4 py-3 rounded-lg my-4 block"
      >
        {" "}
        Take Me Home
      </Link>
    </section>
  );
}
