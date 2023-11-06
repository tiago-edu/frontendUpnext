import { plants } from "./data/plants.js";

const cards = document.querySelector(".cards");

// Função para renderizar as plantas
function renderPlants(plantsToRender) {
  // Resetar container de cards para fazer a renderização da maneira correta
  cards.innerHTML = "";

  plantsToRender.map((plant) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
            <img src="${plant.url}" alt="${plant.name}" class="plantImage">
            <p>${plant.name}</p>
            <p>$${plant.price}</p>
        `;

    cards.appendChild(card);
  });
}

// Referenciando containers para aparecer dependendo do valor do select
const mainContainer = document.querySelector(".mainContainer");
const noPickContainer = document.querySelector(".noPicks");

// Referenciando cada Select
const sunlightSelect = document.getElementById("sunlight");
const waterSelect = document.getElementById("water");
const animalSelect = document.getElementById("animal");

// Funções para manipulação de mudança
function handleSunlightChange(e) {
  e.preventDefault();

  waterSelect.value = "";
  animalSelect.value = "";

  // Filtro de plantas de acordo com o valor do select de Sunlight
  const selectedValue = sunlightSelect.value;
  const filteredPlants = plants.filter((plant) => plant.sun === selectedValue);

  renderPlants(filteredPlants);

  // Condição ternária de "Aparecer e Desaparecer" dos container de "No Picks" e de "Main Container"
  mainContainer.style.display = sunlightSelect.value === "" ? "none" : "block";
  noPickContainer.style.display = sunlightSelect.value === "" ? "flex" : "none";
}

function handleWaterChange(e) {
  e.preventDefault();

  sunlightSelect.value = "";
  animalSelect.value = "";

  const selectedValue = waterSelect.value;
  const filteredPlants = plants.filter(
    (plant) => plant.water === selectedValue
  );

  renderPlants(filteredPlants);

  mainContainer.style.display = waterSelect.value === "" ? "none" : "block";
  noPickContainer.style.display = waterSelect.value === "" ? "flex" : "none";
}

function handlePetsChange(e) {
  e.preventDefault();

  sunlightSelect.value = "";
  waterSelect.value = "";

  const selectedValue = animalSelect.value === "true";
  const filteredPlants = plants.filter(
    (plant) => plant.toxicity === selectedValue
  );
  
  renderPlants(filteredPlants);

  mainContainer.style.display = animalSelect.value === "" ? "none" : "block";
  noPickContainer.style.display = animalSelect.value === "" ? "flex" : "none";
}

sunlightSelect.addEventListener("change", handleSunlightChange);
waterSelect.addEventListener("change", handleWaterChange);
animalSelect.addEventListener("change", handlePetsChange);
