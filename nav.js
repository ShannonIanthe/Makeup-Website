const createNav = () => {
    let nav = document.querySelector('nav');

    nav.innerHTML = `
  <nav>
    <div class="log"><h1>Smack</h1></div>
    <div class="nav-container">
      <div>New</div>
      <div>Best Sellers</div>
      <div>Eye</div>
      <div>Lip</div>
      <div>Face</div>
      <div>Body</div>
      <div>Bundles</div>
      <div>Tools & Merch</div>
      <div>All</div>
      <img
      class="search"
      src="./images/icons8-search-20.png"
      alt="search-button">
      <img
      class="search"
      src="./images/icons8-shopping-bag-50.png"
      alt="search-button">
    </div>
  </nav>`;
}

createNav();