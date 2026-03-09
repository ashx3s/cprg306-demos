import Link from "next/link";
export default function FetchErrorMessage({ name, message }) {
  return (
    <section className="flex flex-col justify-center items-center h-full bg-red-700">
      <h2 className="text-5xl">Error{name}</h2>
      <p>{message}</p>
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
