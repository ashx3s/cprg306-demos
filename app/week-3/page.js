import PageHeader from "../components/PageHeader";
import InfoCard from "../components/InfoCard";

export default function Page() {
  const emperor = {
    name: "Emperor Penguin",
    description:
      "The emperor penguin (Aptenodytes forsteri) is the tallest and heaviest of all living penguin species and is endemic to Antarctica. The male and female are similar in plumage and size, reaching 99 cm (39 in) in length and weighing from 22 to 45 kg (49 to 99 lb). Feathers of the head and back are black and sharply delineated from the white belly, pale-yellow breast and bright-yellow ear patches.",
    href: "https://en.wikipedia.org/wiki/Emperor_penguin",
    linkText: "Wikipedia Article",
  };
  const gentoo = {
    name: "Gentoo Penguin",
    description:
      "The gentoo penguin (/ˈdʒɛntuː/ JEN-too) (Pygoscelis papua) is a penguin species (or possibly a species complex) in the genus Pygoscelis, most closely related to the Adélie penguin (P. adeliae) and the chinstrap penguin (P. antarcticus). The earliest scientific description was made in 1780 by Johann Reinhold Forster with a type locality in the Falkland Islands. The species calls in a variety of ways, but the most frequently heard is a loud, trumpeting call, emitted with the head thrown back.[2]",
    href: "https://en.wikipedia.org/wiki/Gentoo_penguin",
    linkText: "Wikipedia Article",
  };
  const rockhopper = {
    name: "Rockhopper Penguin",
    description:
      "The rockhopper penguins are three closely related taxa of crested penguins that have been traditionally treated as a single species and are sometimes split into three species. Not all experts agree on the classification of these penguins. Some consider all three to be distinct species, while others separate the western and eastern forms as the southern rockhopper penguin and regard the northern rockhopper as a separate species. Still, some experts view all three as varieties of a single species. ",
    href: "https://en.wikipedia.org/wiki/Rockhopper_penguin",
    linkText: "Wikipeda Article",
  };
  // Spread Operator can be used to copy data
  const penguinArray = [{ ...emperor }, { ...gentoo }, { ...rockhopper }];

  const pageHeader = {
    title: "Week 3: Component Props",
    description:
      "Make your components Dynamic by passing information through props.",
  };
  return (
    <main>
      <PageHeader {...pageHeader} />
      {/* Render 3 Cards of information */}
      <section className="bg-gray-200 sm:bg-pink-200 lg:bg-teal-200 dark:bg-gray-800 dark:sm:bg-pink-800 dark:lg:bg-teal-800 p-4 rounded-lg mx-8 max-w-fit">
        <h2 className="text-2xl lg:text-3xl font-semibold">
          Cards without Loops
        </h2>
        <InfoCard {...emperor} />
        <InfoCard {...gentoo} />
        <InfoCard {...rockhopper} />
      </section>
      <section className="m-4">
        <h2 className="text-2xl mb-2">Card with Loops</h2>
        {penguinArray.map((penguin) => (
          <InfoCard key={penguin.name} {...penguin} />
        ))}
      </section>
    </main>
  );
}
