fetch ('https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1')
    .then(res => {
        console.log("RESPONSE", res)    
        return res.json()
    })

    .then(data => {
        console.log("DATA PARSED...", data)
        const productsSection = document.getElementById("produtos")
        console.log(productsSection);
        
        
        for (caralho of data.products) {
            productsSection.innerHTML += `<span class="id1"> <img src="${caralho.image}">  <p id="title"> ${caralho.name} </p> <p>${caralho.description}</p> <p>De: ${caralho.oldPrice}</p> <h3>Por: ${caralho.price}</h3> <button>Comprar</button> </span>`
        }
    })

    