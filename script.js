async function getProducts() {
    let response = await fetch("items.json");
    let products = await response.json();
    return products;
}
function getCardHTML(product) {
    let productData = JSON.stringify(product)
    return `
    <div class="one_item">
    <img src="img/${product.image}" alt="">
    <p class="name">${product.title}</p>
    <p class="price">${product.price}$</p>
    <p class="time">Road Time: ${product.time} hours</p>
    <a href="" class="buy">Buy</a>
</div>
    `
}
getProducts().then((products)=>{
let productslist = document.querySelector('.items')
if (productslist){
    products.forEach(product => {
        productslist.innerHTML += getCardHTML(product)
    });
}

let buyButtons = document.querySelectorAll('.buy')
if (buyButtons){
    buyButtons.forEach(button =>{
        button.addEventListener('click', console.log('123'))
    })
}

})
function searchProducts(event){
    event.preventDefault();
    let queryField = document.querySelector(".search_input")
    let query = queryField.value.toLowerCase()
    console.log(query)
    let productsList = document.querySelector('.items');
    productsList.innerHTML = '';
    getProducts().then((products)=>{
        products.forEach(product =>{
           let title = product.title.toLowerCase()
            if (title.includes(query)){
                productsList.innerHTML += getCardHTML(product)
                console.log(product)
            }
        })

        
        let buyButtons = document.querySelectorAll('.buy')
        if (buyButtons){
            buyButtons.forEach(button =>{
                button.addEventListener('click', console.log('123'))
            })
        }
        
    })

}

let searchForm = document.querySelector('.search_cnt');
searchForm.addEventListener('submit', searchProducts)

let searchBtn = document.querySelector('.search_btn');
searchBtn.addEventListener('click', searchProducts)