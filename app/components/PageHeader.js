export default function PageHeader({ title, description }) {
  return (
    <header className="m-4 p-8 bg-stone-800 rounded-2xl text-center">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-stone-300">{description}</p>
    </header>
  );
}
