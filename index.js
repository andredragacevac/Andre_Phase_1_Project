//brand container display + buttons
function renderBrand(brand){
  const li = document.createElement('li');
  li.className = 'shoe-brand';

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
  document.querySelectorAll('button').forEach(element => {
    element.setAttribute('hidden', true)
   if(brand.id == element.id){
    element.removeAttribute('hidden')
   }
  })
}
function showAllButtons(){
  document.querySelectorAll('button').forEach(element => {
    element.removeAttribute('hidden')})
}
function showAllShoes(){
  document.querySelectorAll('.shoes-li').forEach(element => {
    element.removeAttribute('hidden')})
}

function renderForm(){
 const form = document.createElement('form')
 
}


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


  li.append(h3,pModel,img,pName,pDate);
  document.querySelector('#shoe-list').append(li);
}

getJSON("http://localhost:3000/shoes")
  .then((shoes) => {
    shoes.forEach(shoe => renderShoe(shoe))
})

getJSON("http://localhost:3000/brands")
  .then((brands) => {
    brands.forEach(brand => renderBrand(brand))
    const buttons = document.querySelectorAll('button');
    buttons.forEach(element => console.log(element))
    console.log(buttons)
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