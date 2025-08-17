console.log('Jordan Shoes')

const getProducts= async () => {
    const response = await fetch('js/products.json')
    const data = await response.json()
    return data
}

const generateCard= async() => {
    const products = await getProducts()
    //console.log(products)

    products.map(product =>{
        //console.log(product)
        let card = document.createElement('div')
        card.classList.add('card-produto')
        //console.log(card)
        card.innerHTML = `
        <figure>
            <img src="images/${product.image}" alt="${product.product_name}"/>
        </figure>

        <div class="card-detalhes">
            <h4>${product.product_name}</h4>
            <h5>${product.product_model}</h5>
        </div>

        <h6>R$${product.price}</h6>

        `
        const listaProdutos = document.querySelector('.lista-produtos')
        listaProdutos.appendChild(card)

    })
}

generateCard()