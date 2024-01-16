const inp = document.getElementById('inp')
const searc = document.getElementById('searc')
const forumDiv = document.getElementById('forumDiv')

function searchByName() {
    forumDiv.innerHTML = ''
    axios.get('https://65685f8d9927836bd974aa4c.mockapi.io/pradacts')
    .then(res =>{
        db = res.data
        let filterData = db.filter(item => item.title.toLowerCase().startsWith(inp.value.toLowerCase()))
        filterData.map(item =>{
            const box = document.createElement('div')
            box.className = 'myBox col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12'
            box.innerHTML = `
                <img src="${item.image}" alt="">
                <h5>${item.title}</h5>
                <p>$${item.description}</p>
                <button onclick="addToCart(${item.id})">Add To Basket -></button>
                <button onclick="wishlist(${item.id})">Add To Wishlist -></button>
            `;
            forumDiv.appendChild(box);
        })
    })

}

searc.addEventListener('click',searchByName)

const Myform = document.getElementById('Myform')
const exampleInputEmail1 = document.getElementById('exampleInputEmail1')
const exampleInputPassword1 = document.getElementById('exampleInputPassword1')

function postForm(e) {
    e.preventDefault()

    axios.post('https://65685f8d9927836bd974aa4c.mockapi.io/pradacts',{
        email: exampleInputEmail1.value,
        password: exampleInputPassword1.value
    })
    Myform.reset()

    setTimeout(() => {
        getFromForm();
      }, 1000);

}

Myform.addEventListener('submit',postForm)

function getFromForm() {
    forumDiv.innerHTML = ''
    axios.get('https://65685f8d9927836bd974aa4c.mockapi.io/pradacts')
    .then(res =>{
        db = res.data
        db.map(item =>{
            const box = document.createElement('div')
            box.className = 'myBox col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12'
            box.innerHTML = `
                <img src="${item.image}" alt="">
                <h5>${item.title}</h5>
                <p>$${item.description}</p>
                <button onclick="deleteFromForm(${item.id})">SIL</button>
            `;
            forumDiv.appendChild(box);
        })
    })
}

getFromForm()


function deleteFromForm (id) {
    axios.delete(`https://65685f8d9927836bd974aa4c.mockapi.io/pradacts/${id}`)
    setTimeout(() => {
        getFromForm();
      }, 1000);
}
