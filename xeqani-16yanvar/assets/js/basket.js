const prodacts = document.getElementById('prodacts')

function getBasket() {
    prodacts.innerHTML = ''
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.map((item,index) =>{
        const box = document.createElement('div')
            box.className = 'myBox col-xl-2 col-lg-4 col-md-6 col-sm-12 col-12'
            box.innerHTML = `
                <img src="${item.image}" alt="">
                <h5>${item.title}</h5>
                <button onclick="deletyeFromCart(${index})">Delete</button>
            `;
            prodacts.appendChild(box);
    })
}

function deletyeFromCart(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.splice(index,1)
    localStorage.setItem('cart',JSON.stringify(cart))
    getBasket()
}

getBasket()
