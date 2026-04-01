import seedData from "@/app/data/characters.json";

const characters = seedData.map((character, index) => ({
  id: index + 1,
  ...character,
}));

let nextId = characters.length + 1;

export const store = {
  // getAll
  getAll() {
    return characters;
  },
  // getById
  getById(id) {
    return characters.find((c) => c.id === id) ?? null;
  },
  // add
  add(data) {
    const character = { id: nextId++, ...data };
    characters.push(character);
    return character;
  },
  // update
  update(id, data) {
    const index = characters.findIndex((c) => c.id === id);
    if (index === -1) return null;
    characters[index] = { ...characters[index], ...data };
    return characters[index];
  },
  // remove
  remove(id) {
    const index = characters.findIndex((c) => c.id === id);
    if (index === -1) return null;
    const [removed] = characters.splice(index, 1);
    return removed;
  },
};
