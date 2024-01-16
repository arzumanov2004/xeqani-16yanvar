const prodacts = document.getElementById('prodacts')

async function getProducts() {
    try{
        const response = await axios.get('https://65685f8d9927836bd974aa4c.mockapi.io/pradacts')
        const data = response.data
        db = data
        db.forEach(item =>{
            const box = document.createElement('div')
            box.className = 'myBox col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12'
            box.innerHTML = `
                <img src="${item.image}" alt="">
                <h5>${item.title}</h5>
                <p>$${item.description}</p>
                <button onclick="addToCart(${item.id})">Add To Basket -></button>
                <button onclick="wishlist(${item.id})">Add To Wishlist -></button>
            `;
            prodacts.appendChild(box);
        })
    }catch(error){
        console.error("xeta:",error);
    }
}

function addToCart(id) {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.push(db.find(item => item.id == id))
    localStorage.setItem('cart',JSON.stringify(cart))
}

function wishlist(id) {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
    wishlist.push(db.find(item => item.id == id))
    localStorage.setItem('wishlist',JSON.stringify(wishlist))
}



const btnAZ = document.getElementById('btnA-Z')

function sortAZ() {
    prodacts.innerHTML = ''

    axios.get('https://65685f8d9927836bd974aa4c.mockapi.io/pradacts')
    .then(res =>{
        db = res.data
        const sortData = db.sort((a,b) => a.title.localeCompare(b.title))
        sortData.map(item =>{
            const box = document.createElement('div')
            box.className = 'myBox col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12'
            box.innerHTML = `
                <img src="${item.image}" alt="">
                <h5>${item.title}</h5>
                <p>$${item.description}</p>
                <button onclick="addToCart(${item.id})">Add To Basket -></button>
                <button onclick="wishlist(${item.id})">Add To Wishlist -></button>
            `;
            prodacts.appendChild(box);
        })
    })

}
btnAZ.addEventListener('click',sortAZ)


const btnZA = document.getElementById('btnZ-A')

function sortZA() {
    prodacts.innerHTML = ''

    axios.get('https://65685f8d9927836bd974aa4c.mockapi.io/pradacts')
    .then(res =>{
        db = res.data
        const sortData = db.sort((a,b) => b.title.localeCompare(a.title))
        sortData.map(item =>{
            const box = document.createElement('div')
            box.className = 'myBox col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12'
            box.innerHTML = `
                <img src="${item.image}" alt="">
                <h5>${item.title}</h5>
                <p>$${item.description}</p>
                <button onclick="addToCart(${item.id})">Add To Basket -></button>
                <button onclick="wishlist(${item.id})">Add To Wishlist -></button>
            `;
            prodacts.appendChild(box);
        })
    })

}
btnZA.addEventListener('click',sortZA)


getProducts()