let productsGrid = document.getElementById("products-grid");
let productsArray = [];
let url = 'https://my-json-server.typicode.com/lainny1563/Shop-techologies';

fetch(url + '/products')
.then(async function(response) {
    let products = await response.json();

    productsGrid.innerHTML = "";

    products.forEach(p => {
        productsArray.push(p);

        let pElem = document.createElement('div');
        pElem.classList.add('product');

        pElem.innerHTML = `
        <h2 class='product-name'>${p.name}</h2>
        <img class='product-photo' src='${p.photo_url}' alt='${p.name}'>
        <p class='product-price'><b>Price:</b> ${p.price}</p>
        <p class='product-description'><b>Description:</b> ${p.description}</p>
        <a href='userprofile.html'>Seller profile</a>
        <button class="buy-btn">Buy</button>
        `;

        productsGrid.appendChild(pElem);
    });
});