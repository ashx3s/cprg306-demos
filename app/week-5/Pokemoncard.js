
import { after } from "next/server";
import { pokemons } from "./item";
export default function () {

return (
<section className="bg-green-900 px-10 py-10">
            <h2 className="text-center text-7xl font-extrabold text-green-200 px-10 py-10">Pokedex</h2>
            <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-5 m-5">
                {pokemons.map(pokemon => (
                <article key={pokemon.dex}className="bg-green-800 px-5 py-5 shadow-lg hover:bg-green-700 outline-dashed outline-green-300 outline-3">
                    <img 
                    src={pokemon.img}
                    alt={pokemon.alt}
                    width={30}
                    height={30}
                    className="w-32 h-32 mx-auto"
                    />
                    <h3 className="font-mono font-extrabold text-green-100 text-center">{pokemon.name}</h3>
                    <p className="text-white text-3xl text-center font-sans font-bold">#{pokemon.dex}</p>
                    <p className="text-center text-green-400">{pokemon.type}</p>
                    <p className="text-green-200">{pokemon.desc}</p>
                </article>
                ))}
            </div>
        </section>

        
)}