const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

const spell = document.getElementById("spell");

const spell_info = document.getElementById("spell-info");

const submit_button = document.getElementById("submit-button");

const spell_name_button = document.getElementById("spell-name-button");

const spell_desc_button = document.getElementById("spell-desc-button");

const spell_level_button = document.getElementById("spell-level-button");

const spell_range_button = document.getElementById("spell-range-button");

const spell_duration_button = document.getElementById("spell-duration-button");

const school_button = document.getElementById("school-button");

const casting_time_button = document.getElementById("casting-time-button");

const classes_button = document.getElementById("classes-button");

function spells() {
  fetch("https://www.dnd5eapi.co/api/2014/spells/", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result));
}

spells();
