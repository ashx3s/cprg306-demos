import seedData from "@/app/data/characters.json";

const characters = seedData.map((character, index) => ({
  id: index + 1,
  ...character,
}));

let nextId = characters.length + 1;

export const store = {
  getAll() {
    return characters;
  },

  getById(id) {
    return characters.find((c) => c.id === id) ?? null;
  },

  add(data) {
    const character = { id: nextId++, ...data };
    characters.push(character);
    return character;
  },

  update(id, data) {
    const index = characters.findIndex((c) => c.id === id);
    if (index === -1) return null;
    characters[index] = { ...characters[index], ...data };
    return characters[index];
  },

  remove(id) {
    const index = characters.findIndex((c) => c.id === id);
    if (index === -1) return null;
    const [removed] = characters.splice(index, 1);
    return removed;
  },
};
