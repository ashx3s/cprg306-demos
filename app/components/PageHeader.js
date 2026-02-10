export default function PageHeader({
  title,
  description,
  bgColor = "bg-blue-300 dark:bg-blue-700",
}) {
  return (
    <header className={`m-8 py-12 px-6 ${bgColor}  rounded-xl`}>
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-xl">{description}</p>
    </header>
  );
}
