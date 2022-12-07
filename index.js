//brand container display + buttons
function renderBrand(brand){
  const li = document.createElement('li');
  li.className = 'shoe-brand';

  const img = document.createElement('img');
  img.src = brand.image;
  img.alt = `${brand.name} logo`;
  img.className = brand.name;

  const btn = document.createElement('button');

  li.append(btn);
  btn.append(img);
  document.querySelector('#brand-list').append(li);

}
//
button.addEventListener('click', 
(/* a function returns a brand id based on which button is clicked*/) =>{
  // hide buttons without that id
  //change text content of 2nd <h2> to Upcoming (brand) Releases
  //WHAT TO DO W ARRAYS
    // make a new empty array 
      //new array displays shoes of (brand)
      //hides og array of all shoes

    //Remove shoes without (brand) from the orgional array
      //if you want to go back to og ...

  //displays new array of shoes

  //clicking brand again reveals all other brands in brand list
    // reverts 2nd <h2>
    //
})



//shoe container display
function renderShoe (shoe){
    const li = document.createElement('li');
  li.className = 'shoes-li';
  

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