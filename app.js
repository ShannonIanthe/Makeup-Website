//Fetch data
const api_url = 'https://makeup-api.herokuapp.com/api/v1/products.json'
async function getMakeup() {
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data)
}

getMakeup();


//Flipcard
const cards = document.querySelectorAll('.card');

function flipCard(){
    this.classList.toggle("flip");
}
cards.forEach((card) => card.addEventListener("click", flipCard));