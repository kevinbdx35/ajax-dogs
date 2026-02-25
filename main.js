'use strict';

const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const doggos = document.querySelector(".doggos");

function addNewDoggo() {
  fetch(DOG_URL)
    .then(function(response) {
      return response.json();
    })
    .then(function(processedResponse) {
      const img = document.createElement("img");
      img.src = processedResponse.message;
      img.alt = "Cute doggo";
      doggos.appendChild(img);
    })
    .catch(function(err) {
      console.error("Failed to fetch doggo:", err);
    });
}

document.querySelector(".add-doggo").addEventListener("click", addNewDoggo);
