import PageHeader from "../components/PageHeader";
import PokemonCard from "./Pokemoncard"

export default function Page() {
  return (
    <main>
      <PageHeader 
        title="Pokedex"
        description="Trying this pokedex w next.js"/>

        <PokemonCard />
    </main>
  );
}
