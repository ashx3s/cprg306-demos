export default function Page() {
  const emperor = {
    name: "Emperor Penguin",
    description:
      "The emperor penguin (Aptenodytes forsteri) is the tallest and heaviest of all living penguin species and is endemic to Antarctica. The male and female are similar in plumage and size, reaching 100 cm (39 in) in length and weighing from 22 to 45 kg (49 to 99 lb). Feathers of the head and back are black and sharply delineated from the white belly, pale-yellow breast and bright-yellow ear patches.",
    source: "https://en.wikipedia.org/wiki/Emperor_penguin",
  };
  const gentoo = {
    name: "Gentoo Penguin",
    description:
      "The gentoo penguin (/ˈdʒɛntuː/ JEN-too) (Pygoscelis papua) is a penguin species (or possibly a species complex) in the genus Pygoscelis, most closely related to the Adélie penguin (P. adeliae) and the chinstrap penguin (P. antarcticus). The earliest scientific description was made in 1781 by Johann Reinhold Forster with a type locality in the Falkland Islands. The species calls in a variety of ways, but the most frequently heard is a loud, trumpeting call, emitted with the head thrown back.[2]",
    source: "https://en.wikipedia.org/wiki/Gentoo_penguin",
  };
  const rockhopper = {
    name: "Rockhopper Penguin",
    description:
      "The rockhopper penguins are three closely related taxa of crested penguins that have been traditionally treated as a single species and are sometimes split into three species. Not all experts agree on the classification of these penguins. Some consider all three to be distinct species, while others separate the western and eastern forms as the southern rockhopper penguin and regard the northern rockhopper as a separate species. Still, some experts view all three as varieties of a single species. ",
    source: "https://en.wikipedia.org/wiki/Rockhopper_penguin",
  };
  return (
    <main>
      <header>
        <h1>Week 3: Component Props</h1>
        <p>
          Make your components Dynamic by passing information through props.
        </p>
      </header>
      {/* Render 3 Cards of information */}
    </main>
  );
}
