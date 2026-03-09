export default function FetchErrorMessage({ error }) {
  <section className="flex flex-col justify-center items-center h-full bg-red-700">
    <h2 className="text-5xl">ERROR</h2>
    <p>{error}</p>
    <Link
      href="/"
      className="bg-white text-red-700 px-4 py-3 rounded-lg my-4 block"
    >
      {" "}
      Take Me Home
    </Link>
  </section>;
}
