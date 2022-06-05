//Fetch data type: lipstick
const api_url = 'https://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick&price_greater_than=5';
async function getMakeup() {
    const response = await fetch(api_url);
    const data = await response.json();
    return data;
}

const apiUrl = 'https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeliner&price_greater_than=5'
async function getEyeLiner() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data
}


//Fetch Lipstick Data and place in div and img
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
        price.textContent =  `${element.price_sign} ${element.price}0`;

        card.appendChild(price);

        const description = window.document.createElement("p");
        description.classList.add("product-description");
        description.textContent = element.description;
        
        card.appendChild(description);

        cardContainer.appendChild(card);
    });
});


//Fetch Eye Shadow Data and place in div and img
window.addEventListener("load", async function () {
    const eyeliner = await getEyeLiner();
    const eyelinerContainer = window.document.querySelector("div#eyeliner-container");
    eyeliner.forEach((element) => {
        const card2 = this.window.document.createElement("div");
        eyeliner.classList.add("card2");

        const image2 = window.document.createElement("img");
        image2.classList.add("card2-image2");
        image2.setAttribute("alt", `https://${element.api_featured_image}`);
        image2.setAttribute("alt", `https://${element.api_featured_image}`);

        card2.appendChild(image2);
    })
})
