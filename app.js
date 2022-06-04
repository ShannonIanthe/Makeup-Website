//Fetch data type: lipstick
const api_url = 'https://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick&product_type=eyeliner&price_greater_than=5';
async function getMakeup() {
    const response = await fetch(api_url);
    const data = await response.json();
    return data;
}


//Fetch Data and place in div and img
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


/* write a function -if price is 0.00 place 9.00 as price 
if price <= 0.0 {
    console.log(9.00);
}
*/