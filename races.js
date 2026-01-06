const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

const container = document.createElement("div");
container.classList.add("race-container");
document.body.appendChild(container);

fetch("https://www.dnd5eapi.co/api/2014/races/", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    result.results.forEach((race) => {
      container.appendChild(createracebtn(race));
    });
  })
  .catch((error) => console.error(error));

function createracebtn(race) {
  const racediv = document.createElement("div");
  racediv.classList.add("racebtn");
  racediv.textContent = race.name;

  racediv.addEventListener("click", () => {
    fetch(`https://www.dnd5eapi.co${race.url}`)
      .then((response) => response.json())
      .then((raceData) => {
        console.log(raceData);
        const bonuses = raceData.ability_bonuses
          .map((b) => `${b.ability_score.name} +${b.bonus}`)
          .join(", ");

        const languages = raceData.languages.map((l) => l.name).join(", ");

        const traits = raceData.traits.map((t) => t.name).join(", ");

        document.getElementById("info-container").innerHTML = `
  <strong>Name:</strong> ${raceData.name}<br>
  <strong>Speed:</strong> ${raceData.speed} ft<br>
  <strong>Size:</strong> ${raceData.size}<br>
  <strong>Size Description:</strong> ${raceData.size_description}<br><br>

  <strong>Age:</strong><br>
  ${raceData.age}<br><br>

  <strong>Alignment:</strong><br>
  ${raceData.alignment}<br><br>

  <strong>Ability Bonuses:</strong><br>
  ${bonuses}<br><br>

  <strong>Languages:</strong><br>
  ${languages}<br>
  ${raceData.language_desc}<br><br>

  <strong>Traits:</strong><br>
  ${traits}
`;
      })
      .catch((error) => console.error(error));
  });

  return racediv;
}
