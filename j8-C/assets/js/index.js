import { initIngredients } from "./functions/init.js";
import { displayIngredient } from "./functions/display.js";
import { Pizza } from "./classes/pizza.js";


window.addEventListener("DOMContentLoaded", function(){

    let availableIngredients = initIngredients();
    let pizza = new Pizza();

    for(let i = 0; i < availableIngredients.length; i++)
    {
        displayIngredient(availableIngredients[i]);
    }

    let stageIngredients = document.querySelectorAll("section#stage ul li");

    for(let i = 0; i < stageIngredients.length; i++)
    {
        stageIngredients[i].addEventListener("click", function(event){
            let name = this.getAttribute("data-ingredient");
            let ingredient = null;

            for(let i = 0; i < availableIngredients.length; i++)
            {
                if(availableIngredients[i].name === name)
                {
                    ingredient = availableIngredients[i];
                }
            }

            if(this.firstChild.classList.contains("selected"))
            {
                pizza.removeIngredient(ingredient);
            }
            else
            {
                pizza.addIngredient(ingredient);
            }

            this.firstChild.classList.toggle("selected");
        });
    }

    let orderButton = document.getElementById("order");
    orderButton.addEventListener("click", function(){
       pizza.cook();
    });
});