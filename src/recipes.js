import spaghettiImg from "../assets/recipes/spaghetti.png";
import ramenImg from "../assets/recipes/ramen.png";
import lasagnaImg from "../assets/recipes/lasagna.png";
import pizzaImg from "../assets/recipes/pizza.png";
import friesImg from "../assets/recipes/fries.png";
import shakeImg from "../assets/recipes/shake.png";
import cupcakeImg from "../assets/recipes/cupcake.png";
import cakeImg from "../assets/recipes/cake.png";

let content = document.querySelector("#content");

const recipeClasses = ["spaghetti", "ramen", "lasagna", "pizza", "fries", "shake", "cupcake", "cake"];
const imageSources = [spaghettiImg, ramenImg, lasagnaImg, pizzaImg, friesImg, shakeImg, cupcakeImg, cakeImg];
const descriptions = [
    `This is spaghetti. You make it by boiling noodles until tender, then adding a tomato sauce made with crushed tomatoes, garlic, onions, olive oil, and herbs.
    Optional additions include ground beef or sausage for a meat sauce.`,
    `This is ramen. You make it by boiling wheat noodles and adding them to a savory broth, which can be miso, soy sauce, or pork-based. Common toppings include
    sliced pork, soft-boiled eggs, nori (seaweed), green onions, bamboo shoots, and corn.`,
    ` This is lasagna. You make it by layering sheets of pasta with a rich meat or vegetable sauce, ricotta mixed with eggs and parsley, shredded mozzarella, and
    grated Parmesan. Bake until the cheese is melted and the top is golden brown.`,
    `This is pizza. You make it by spreading dough with tomato sauce, adding a generous layer of mozzarella cheese, and various toppings such as pepperoni,
    mushrooms, bell peppers, onions, and olives. Bake in a hot oven until the crust is crispy and the cheese is bubbly.`,
    `These are fries. You make them by cutting potatoes into strips, soaking them in cold water to remove excess starch, then deep-frying them twice for extra
    crispiness. Season with salt and serve hot.`,
    `This is a milkshake. You make it by blending vanilla ice cream with milk until smooth and creamy. For extra flavor, you can add chocolate syrup, fresh
    strawberries, or a splash of vanilla extract. Top with whipped cream and a cherry.`,
    `These are cupcakes. You make them by mixing a batter of flour, sugar, eggs, butter, and vanilla, baking it in small molds, and then frosting each cupcake
    with buttercream or cream cheese icing. Decorate with sprinkles, fruit, or edible glitter.`,
    `This is a cake. You make it by mixing a batter of flour, sugar, eggs, butter, and baking powder, baking it in a pan, and then frosting it with buttercream,
    fondant, or ganache. Layer the cake with fillings like whipped cream, fruit preserves, or chocolate mousse for extra flavor.`,
];

const generateRecipes = (reset) => {
    if (reset) {
        content.innerHTML = "";
    }
    let recipes = document.createElement("div");
    recipes.classList.add("recipes");
    content.appendChild(recipes);
    for (let i = 0; i < recipeClasses.length; i++) {
        let recipe = document.createElement("div");
        recipe.classList.add(`${recipeClasses[i]}`);
        recipe.classList.add("card");
        let image = document.createElement("img");
        image.src = imageSources[i];
        recipe.appendChild(image);
        let description = document.createElement("div");
        description.classList.add("description");
        description.innerHTML = `${descriptions[i]}`;
        recipe.appendChild(description);
        recipes.appendChild(recipe);
    }
};

export default generateRecipes;
