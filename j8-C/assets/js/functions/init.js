import {Ingredient} from "../classes/ingredient.js";

function initIngredients()
{
    let availableIngredients = [];

    let bacon = new Ingredient("Bacon", "assets/img/bacon.png");
    let carrot = new Ingredient("Carotte", "assets/img/carrots.png");
    let cheese = new Ingredient("Fromage", "assets/img/cheese.png");
    let egg = new Ingredient("Oeuf", "assets/img/egg.png");
    let eggplant = new Ingredient("Aubergine", "assets/img/eggplant.png");
    let goatCheese = new Ingredient("Fromage de chèvre", "assets/img/goat-cheese.png");
    let honey = new Ingredient("Miel", "assets/img/honey.png");
    let mushroom = new Ingredient("Champignon", "assets/img/mushroom.png");
    let olive = new Ingredient("Olive", "assets/img/olive.png");
    let pepper = new Ingredient("Piment", "assets/img/pepper.png");
    let potato = new Ingredient("Pomme de terre", "assets/img/potato.png");
    let tomato = new Ingredient("Tomate", "assets/img/tomato.png");

    availableIngredients.push(bacon);
    availableIngredients.push(carrot);
    availableIngredients.push(cheese);
    availableIngredients.push(egg);
    availableIngredients.push(eggplant);
    availableIngredients.push(goatCheese);
    availableIngredients.push(honey);
    availableIngredients.push(mushroom);
    availableIngredients.push(olive);
    availableIngredients.push(pepper);
    availableIngredients.push(potato);
    availableIngredients.push(tomato);

    return availableIngredients;
}

export { initIngredients };