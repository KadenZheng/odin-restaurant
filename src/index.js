import generateRecipes from "./recipes.js";
import generateSplash from "./splash.js";
import generateAbout from "./about.js";
import generateReservations from "./reservations.js";
import generateContact from "./contact.js";
import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
    generateSplash(false);
    generateAbout(false);
    generateRecipes(false);
    generateContact(false);
});

let recipesButton = document.querySelector("#recipes");
recipesButton.addEventListener("click", () => {
    generateRecipes(true);
});

let logo = document.querySelector("header > h5");
logo.addEventListener("click", () => {
    generateSplash(false);
    generateAbout(false);
    generateRecipes(false);
    generateContact(false);
});

let about = document.querySelector("#about-us");
about.addEventListener("click", () => {
    generateAbout(true);
});

let reservations = document.querySelector("#reservations");
reservations.addEventListener("click", () => {
    generateSplash(true);
    generateReservations();
});

let contact = document.querySelector("#contact");
contact.addEventListener("click", () => {
    generateContact(true);
});
