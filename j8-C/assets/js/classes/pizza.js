import { displayIngredient } from "../functions/display.js";

class Pizza {
    #ingredients;

    constructor() {
        this.#ingredients = [];
    }

    get ingredients () {
        return this.#ingredients;
    }

    addIngredient(ingredient) {
        this.#ingredients.push(ingredient);
        this.display();
    }

    removeIngredient(ingredient) {
        let list = [];

        for(let i = 0; i < this.#ingredients.length; i++)
        {
            if(this.#ingredients[i].name !== ingredient.name)
            {
                list.push(this.#ingredients[i]);
            }
        }

        this.#ingredients = list;
        this.display();
    }

    display() {
        let last = document.querySelector("main aside ul li:last-of-type");
        let ul = document.querySelector("main aside ul");
        ul.innerHTML = "";
        ul.appendChild(last);

        for(let i = 0; i < this.#ingredients.length; i++)
        {
            displayIngredient(this.#ingredients[i], "main aside ul");
        }
    }

    cooked () {

        let section = document.querySelector("main aside section");
        section.innerHTML = "";

        let h3 = document.createElement("h3");
        h3.classList.add("sr-only");
        let title = document.createTextNode("Statut de la commande");
        h3.appendChild(title);

        let figure = document.createElement("figure");
        let img = document.createElement("img");
        img.setAttribute("alt", "Pizza");
        img.setAttribute("src", "assets/img/pizza.png");

        figure.appendChild(img);

        let h4 = document.createElement("h4");
        title = document.createTextNode("Pizza prête !");
        h4.appendChild(title);

        section.appendChild(h3);
        section.appendChild(figure);
        section.appendChild(h4);

        setTimeout(function(){
            section.innerHTML = "";
        }, 5000);
    }

    cook () {
        let time = this.#ingredients.length * 1000;
        let articles = document.querySelectorAll("section#stage article");

        for(let i = 0; i < articles.length; i++)
        {
            if(articles[i].classList.contains("selected"))
            {
                articles[i].classList.remove("selected");
            }
        }

        this.#ingredients = [];
        this.display();

        let that = this;

        setTimeout(function(){
            that.cooked();
        }, time);
    }
}

export { Pizza };