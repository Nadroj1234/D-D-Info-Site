const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

console.log("hello");

const monster = document.getElementById("monster");

const mosnter_info_display = document.getElementById("mosnter_info_display");

const submit_button = document.getElementById("submit_button");

const name_button = document.getElementById("name_button");

const desc_button = document.getElementById("desc_button");

const size_button = document.getElementById("size_button");

const type_button = document.getElementById("type_button");

const speed_button = document.getElementById("speed_button");

const armour_class_type_button = document.getElementById(
  "armour_class_type_button"
);

let stored_data = "";

submit_button.addEventListener("click", () => {
  stored_data = monster.value.trim();
});

name_button.addEventListener("click", () => {
  function getMonster() {
    fetch(
      `https://www.dnd5eapi.co/api/2014/monsters/${stored_data}`,
      requestOptions
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        mosnter_info_display.textContent = result.name;
        console.log(result);
      })
      .catch((error) => console.error(error));
  }
  getMonster();
  monster.value = "";
});

desc_button.addEventListener("click", () => {
  function getMonster() {
    fetch(
      `https://www.dnd5eapi.co/api/2014/monsters/${stored_data}`,
      requestOptions
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        mosnter_info_display.textContent = result.desc;
        console.log(result);
      })
      .catch((error) => console.error(error));
  }
  getMonster();
  monster.value = "";
});

size_button.addEventListener("click", () => {
  function getMonster() {
    fetch(
      `https://www.dnd5eapi.co/api/2014/monsters/${stored_data}`,
      requestOptions
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        mosnter_info_display.textContent = result.size;
        console.log(result);
      })
      .catch((error) => console.error(error));
  }
  getMonster();
  monster.value = "";
});

type_button.addEventListener("click", () => {
  function getMonster() {
    fetch(
      `https://www.dnd5eapi.co/api/2014/monsters/${stored_data}`,
      requestOptions
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        mosnter_info_display.textContent = result.type;
        console.log(result);
      })
      .catch((error) => console.error(error));
  }
  getMonster();
  monster.value = "";
});

armour_class_type_button.addEventListener("click", () => {
  function getMonster() {
    fetch(
      `https://www.dnd5eapi.co/api/2014/monsters/${stored_data}`,
      requestOptions
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        mosnter_info_display.textContent = result.armor_class[0].type;
        console.log(result);
      })
      .catch((error) => console.error(error));
  }
  getMonster();
  monster.value = "";
});

actions_button.addEventListener("click", () => {
  function getMonster() {
    fetch(
      `https://www.dnd5eapi.co/api/2014/monsters/${stored_data}`,
      requestOptions
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        mosnter_info_display.textContent = result.actions[0].name;
        console.log(result);

        const actionsList = result.actions
          .map((action) => `${action.name}: ${action.desc}`)
          .join("\n\n");
        mosnter_info_display.textContent = actionsList;
      })
      .catch((error) => console.error(error));
  }
  getMonster();
  monster.value = "";
});

speed_button.addEventListener("click", () => {
  function getMonster() {
    fetch(
      `https://www.dnd5eapi.co/api/2014/monsters/${stored_data}`,
      requestOptions
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        mosnter_info_display.textContent = "";
        if (result.speed) {
          Object.entries(result.speed).forEach(([type, value]) => {
            mosnter_info_display.textContent += `${type}: ${value}\n`;
          });
        }
        console.log(result);
      })
      .catch((error) => console.error(error));
  }
  getMonster();
  monster.value = "";
});
