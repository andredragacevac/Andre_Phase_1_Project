//brand container display + buttons
function renderBrand(brand){
  const li = document.createElement('li');
  li.className = 'shoe-brand';
  li.id = brand.id

  const img = document.createElement('img');
  img.src = brand.image;
  img.alt = `${brand.name} logo`;
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
    console.log('1')
  } else {
    hideShoeForm();
    console.log('2')
  }
}

function showShoeForm (){
  shoeFormVisible = false;
  document.querySelectorAll('#new-shoe-form').forEach(element => {
    element.removeAttribute('hidden')
  })
}

function hideShoeForm(){
  shoeFormVisible = true;
  document.querySelectorAll('#new-shoe-form').forEach(element => {
    element.setAttribute('hidden', true)})
}

toggleShoeFormButton.addEventListener('click', ()=> {
  toggleShoeForm()
});

shoeForm.addEventListener('submit', function(event){
  event.preventDefault();
});

//shoe container display
function renderShoe (shoe){
  const li = document.createElement('li');
  li.className = 'shoes-li';

  li.id = shoe.brandId;
  

  const h3 = document.createElement('h3');
  h3.textContent = shoe.brand;


  const pModel = document.createElement('p');
  pModel.textContent = shoe.model;
  

  const pName = document.createElement('p');
  pName.textContent = shoe.name;


  const img = document.createElement('img');
  img.src = shoe.image;
  img.alt = `${shoe.model} picture`;


  const pDate = document.createElement('p');
  pDate.textContent = shoe.date;
  pDate.setAttribute('hidden', true)


  li.append(h3,pModel,img,pName,pDate);
  document.querySelector('#shoe-list').append(li);

  li.addEventListener('mouseover', ()=>{
    li.className = 'shoes-li displayMouseover'
    pDate.removeAttribute('hidden')
  })
  li.addEventListener('mouseout', ()=>{
    li.className = 'shoes-li'
    pDate.setAttribute('hidden', true)
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