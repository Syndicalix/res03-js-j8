function displayIngredient(ingredient, where = "section#stage ul") {
    let li = document.createElement("li");
    li.setAttribute("data-ingredient", ingredient.name);

    let article = document.createElement("article");

    let header = document.createElement("header");

    let figure = document.createElement("figure");

    let img = document.createElement("img");
    img.setAttribute("src", ingredient.file);
    img.setAttribute("alt", ingredient.name);

    let h3 = document.createElement("h3");
    let title = document.createTextNode(ingredient.name);

    h3.appendChild(title);

    figure.appendChild(img);

    header.appendChild(figure);
    header.appendChild(h3);

    article.appendChild(header);

    li.appendChild(article);

    let ul = document.querySelector(where);

    if(where === "section#stage ul")
    {
        ul.appendChild(li);
    }
    else
    {
        let lastLi = document.querySelector(where + " li:last-of-type");
        ul.insertBefore(li, lastLi);
    }

}

export { displayIngredient };