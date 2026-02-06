

// Sort pokemons by pokedex number automatically
pokemons.sort((a, b) => a.dex - b.dex);


var type = "All";
var gen = "All";


function render() {
  pokemonGrid.innerHTML = ""

  pokemons.forEach(function(pokemon) {
    const matchType = type === "All" || pokemon.type.includes(type) 
    const matchGen = gen === "All" || pokemon.gen.toString() === gen // gen is a string from the select dropdown

    if (matchType && matchGen) { // if both filters match
      const card = document.createElement("article");
        card.innerHTML = `
        <figure>
            <img src="${pokemon.img}" alt="${pokemon.alt}">
          <figcaption>
            <h3>${pokemon.name}</h3>
            <span>#${pokemon.dex}</span>
            <span class="typeBadge" data-type="${pokemon.type[0]}">${pokemon.type[0]}</span>
            <p>${pokemon.desc}</p>
          </figcaption>
        </figure> 
      `;
      pokemonGrid.appendChild(card);
    }
  });
};


filterGen.addEventListener("change", function() {
  gen = this.value; // value from the select dropdown
  render();
});

var typesBtns = document.querySelectorAll(".typeBtn");

typesBtns.forEach(function(button) { // add event listener to each type button
  button.addEventListener("click", function() {
    type = this.dataset.type
    typesBtns.forEach(function(x) {
      x.classList.remove("active")
    })
    this.classList.add("active")
    render();
  })
})


resetBtn.addEventListener("click", function() {
  type = "All";
  gen = "All"; 
  filterGen.value = "All";
  typesBtns.forEach(function(button) {
    button.classList.toggle("active", button.dataset.type === "All");
  });
  render();
});
render();

// button click sound effect
const clickSound = new Audio("assets/sounds/button-click.mp3");

document.querySelectorAll("button, select").forEach(button => {
  button.addEventListener("click", () => {
    clickSound.currentTime = 0;
    clickSound.volume = 0.4; // set volume to 40%
    clickSound.play(); 
  });
});

