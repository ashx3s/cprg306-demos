import Link from "next/link";
export default function FetchErrorMessage(error) {
  return (
    <div className="bg-red-500 flex justify-center items-center p-8">
      <h2 className="text-5xl font-bold">ERROR!</h2>
      <p className="text-xl">{error}</p>
      <Link href="/" className="bg-amber-600 px-4 py-2 rounded-md">
        Take me home
      </Link>
    </div>
  );
}
