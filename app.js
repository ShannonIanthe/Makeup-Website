//Fetch data
const api_url = 'https://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick';
async function getMakeup() {
    const response = await fetch(api_url);
    const data = await response.json();
    return data;
}

//Flipcard
const cards = document.querySelectorAll('.card');

function flipCard(){
    this.classList.toggle("flip");
}
cards.forEach((card) => card.addEventListener("click", flipCard));

window.addEventListener("load", async function () {
    const makeup = await getMakeup();
    const cardContainer = window.document.querySelector("div#card-container");
    makeup.forEach((element) => {
        const card = window.document.createElement("div");
        card.classList.add("card");

        const image = window.document.createElement("img");
        image.classList.add("card-image");
        image.setAttribute("alt", `https://${element.api_featured_image}`);
        image.setAttribute("src", `https://${element.api_featured_image}`);

        card.appendChild(image);

        const title = window.document.createElement("h4");
        title.classList.add("product-title");
        title.textContent = element.name;

        card.appendChild(title);

        const price = window.document.createElement("p");
        price.classList.add("product-price");
        price.textContent =  `${element.price_sign} ${element.price}`;

        card.appendChild(price);

        cardContainer.appendChild(card);
    });
});