const addProduct = () => {
    const productField = document.getElementById('product-name')
    const quantityField = document.getElementById('product-quantity');
    const product = productField.value;
    const quantity = quantityField.value;

    productField.value = '';
    quantityField.value = '';
    console.log(product, quantity);
    showProduct(product, quantity);
    saveProduct(product, quantity)
}

const showProduct = (product, quantity) => {
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li')
    li.innerText = `${product} : ${quantity}`;
    productContainer.appendChild(li)


}

const getStoreShoppingCart = () => {
    let cart = {}
    const storeCart = localStorage.getItem('cart')
    if (storeCart) {
        cart = JSON.parse(storeCart) //to make string to object we use json.parse
    }
    return cart; //return a object

}

const saveProduct = (product, quantity) => {
    const cart = getStoreShoppingCart();
    cart[product] = quantity;
    const cartString = JSON.stringify(cart)
    console.log(cartString);
    localStorage.setItem('cart', cartString);
}

const displayProductsFromLocalStorage = () => {
    const saveCart = getStoreShoppingCart(); //store kore rakha sob kiso pabo

    console.log(saveCart); //
    for (const product in saveCart) {
        console.log(product)
        const quantity = saveCart[product]
        console.log(saveCart[product])
        console.log(product, quantity)
        showProduct(product, quantity)
    }

}
displayProductsFromLocalStorage();