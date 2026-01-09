const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};
let spell_name = "";
const spell = document.getElementById("spell");

const spell_info = document.getElementById("spell_info");

const submit_button = document.getElementById("submit_button");

const spell_name_button = document.getElementById("spell_name_button");

const spell_desc_button = document.getElementById("spell_desc_button");

const spell_level_button = document.getElementById("spell_level_button");

const spell_range_button = document.getElementById("spell_range_button");

const spell_duration_button = document.getElementById("spell_duration_button");

const spell_school_button = document.getElementById("spell_school_button");

const spell_casting_time_button = document.getElementById(
  "spell_casting_time_button"
);
submit_button.addEventListener("click", () => {
  spell_name = document.getElementById("input_spell").value.toLowerCase();
  return spell_name;
});
const spell_classes_button = document.getElementById("spell_classes_button");
function getSpellName() {
  submit_button.addEventListener("click", () => {
    spell_name = document.getElementById("input_spell").value.toLowerCase();
    return spell_name;
  });
}
spell_name_button.addEventListener("click", () => {
  function spellName() {
    fetch(
      `https://www.dnd5eapi.co/api/2014/spells/${spell_name}`,
      requestOptions
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        spell_info.textContent = result.name;
      });
  }
  spellName();
});

spell_desc_button.addEventListener("click", () => {
  function spellDesc() {
    fetch(
      `https://www.dnd5eapi.co/api/2014/spells/${spell_name}`,
      requestOptions
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        spell_info.textContent = result.desc;
      });
  }
  spellDesc();
});

spell_level_button.addEventListener("click", () => {
  function spellLevel() {
    fetch(
      `https://www.dnd5eapi.co/api/2014/spells/${spell_name}`,
      requestOptions
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        spell_info.textContent = result.level;
      });
  }
  spellLevel();
});

spell_range_button.addEventListener("click", () => {
  function spellRange() {
    fetch(
      `https://www.dnd5eapi.co/api/2014/spells/${spell_name}`,
      requestOptions
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        spell_info.textContent = result.range;
      });
  }
  spellRange();
});

spell_duration_button.addEventListener("click", () => {
  function spellDuration() {
    fetch(
      `https://www.dnd5eapi.co/api/2014/spells/${spell_name}`,
      requestOptions
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        spell_info.textContent = result.duration;
      });
  }
  spellDuration();
});

spell_school_button.addEventListener("click", () => {
  function spellSchool() {
    fetch(
      `https://www.dnd5eapi.co/api/2014/spells/${spell_name}`,
      requestOptions
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        spell_info.textContent = result.school.name;
      });
  }
  spellSchool();
});

spell_casting_time_button.addEventListener("click", () => {
  function spellCastingTime() {
    fetch(
      `https://www.dnd5eapi.co/api/2014/spells/${spell_name}`,
      requestOptions
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        spell_info.textContent = result.casting_time;
      });
  }
  spellCastingTime();
});

spell_classes_button.addEventListener("click", () => {
  function spellClasses() {
    fetch(
      `https://www.dnd5eapi.co/api/2014/spells/${spell_name}`,
      requestOptions
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        spell_info.textContent = result.classes[0].name;
      });
  }
  spellClasses();
});

function spells() {
  fetch(`https://www.dnd5eapi.co/api/2014/spells/${spell_name}`, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result));
}

spells();
