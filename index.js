//brand container display + buttons
function renderBrand(brand){
  const li = document.createElement('li');
  li.className = 'shoe-brand';
  li.id = brand.id

  const img = document.createElement('img');
  img.src = brand.image;
  img.className = brand.name;

  const btn = document.createElement('button');
  btn.id = brand.id;

  li.append(btn);
  btn.append(img);
  document.querySelector('#brand-list').append(li);


  btn.addEventListener('click', ()=> {
      if(!isBrandActive){
        isBrandActive = true;
        shoesByBrand(brand)
        hideInactiveButtons(brand);
      }else if (isBrandActive){
        isBrandActive = false;
        showAllButtons();
        showAllShoes();
      }
      
    })
}
let isBrandActive = false;

function shoesByBrand (brand){
  document.querySelectorAll('.shoes-li').forEach(element => {
    element.setAttribute('hidden', true)
   if(brand.id == element.id){
    element.removeAttribute('hidden')
   }
  })
}
function hideInactiveButtons (brand){
  document.querySelectorAll('.shoe-brand').forEach(element => {
    element.setAttribute('hidden', true)
   if(brand.id == element.id){
    element.removeAttribute('hidden')
   }
  })
}
function showAllButtons(){
  document.querySelectorAll('.shoe-brand').forEach(element => {
    element.removeAttribute('hidden')})
}
function showAllShoes(){
  document.querySelectorAll('.shoes-li').forEach(element => {
    element.removeAttribute('hidden')})
}
//form

const toggleShoeFormButton = document.querySelector('#toggleShoeForm');
const shoeForm = document.querySelector('#new-shoe-form');
let shoeFormVisible = false;
hideShoeForm();

function toggleShoeForm(){
  if(shoeFormVisible){
    showShoeForm();
    toggleShoeFormButton.textContent = "Close Form";
  } else {
    hideShoeForm();
    toggleShoeFormButton.textContent = "New Shoe";
  }
}

function showShoeForm (){
  shoeFormVisible = false;
  document.querySelectorAll('#new-shoe-form').forEach(element => {
    element.classList.remove('hidden')
  })
}

function hideShoeForm(){
  shoeFormVisible = true;
  document.querySelectorAll('#new-shoe-form').forEach(element => {
    element.classList.add('hidden')})
}

toggleShoeFormButton.addEventListener('click', ()=> {
  toggleShoeForm()
});


const brandId = {
  "Air Jordan": 1,
  "Nike": 2,
  "New Balence": 3,
  "Adidas": 4,
  "Bape": 5
}
function inputShoeBrandId(name){
  return brandId[name]
}

shoeForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  const shoe = {
    brandId: inputShoeBrandId(e.target.brand.value),
    brand: e.target.brand.value,
    model: e.target.model.value,
    name: e.target.name.value,
    retailPrice: e.target.retailPrice.value,
    date: e.target.date.value,
    image: "https://mbfn.org/wp-content/uploads/2020/09/image-coming-soon-placeholder.png"
  }
  //renderShoe(shoe);
  postJSON("http://localhost:3000/shoes", shoe)
    .then(shoe => {
     renderShoe(shoe)
     e.target.reset();
    })
})
// function handleSubmit(event) {
//   const data = new FormData(event.shoes);

//   const value = data.get('brand');

//   if(value == shoes.brand){
//     shoes.brandId = brand.id
//   }

// }

//shoe container display
function renderShoe (shoe){
  const li = document.createElement('li');
  li.className = 'shoes-li';
  console.log(shoe)
  li.id = shoe.brandId;
  

  const h3 = document.createElement('h3');
  h3.textContent = shoe.brand;


  const pModel = document.createElement('p');
  pModel.textContent = shoe.model;
  

  const pName = document.createElement('p');
  pName.textContent = shoe.name;


  const img = document.createElement('img');
  img.src = shoe.image;

  const pDate = document.createElement('p');
  pDate.className = "tooltip";
  pDate.textContent = shoe.date
  const span = document.createElement('span')

  span.className = "tooltiptext";
  span.append(pDate);

  const pPrice = document.createElement('p');
  pPrice.className = "tooltip";
  pPrice.textContent = shoe.retailPrice;
  span.style.visibility = 'hidden';
  span.append(pPrice);

  li.append(h3,pModel,img,pName, span);
  document.querySelector('#shoe-list').append(li);

  li.addEventListener('mouseover', ()=>{
    li.className = 'shoes-li'
    span.style.visibility = 'visible'
  })
  li.addEventListener('mouseout', ()=>{
    li.className = 'shoes-li'
    span.style.visibility = 'hidden'
  })

}

getJSON("http://localhost:3000/shoes")
  .then((shoes) => {
    shoes.forEach(shoe => renderShoe(shoe))
})

getJSON("http://localhost:3000/brands")
  .then((brands) => {
    brands.forEach(brand => renderBrand(brand))
})

function getJSON(url) {
    return fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw (response.statusText)
        }
      })
}
function postJSON(url, data) {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      throw response;
    })
}