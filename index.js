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


  btn.addEventListener('click', ()=> shoesByBrand(brand));

  //add an event listener to activate button
}



// takes brand as a parameter
// adds hidden attribute to shoe containers
// shows shoes that match brand
function shoesByBrand (brand){
  document.querySelectorAll('.shoes-li').forEach(element => {
    element.setAttribute('hidden', true)
   if(brand.id == element.id){
    element.removeAttribute('hidden')
   }
  })
}




/* function brandFilter (){
    // selects button based off which is clicked
      // for loop???

    // changes button status to active
      // could be seperate function that is EventHandler in click event
      // if yes then 

    // if (button is active){
    // hides inactive buttons *can be a seperate function
    // that is called from listener*

    // updates array *thought = update is crud action PUT/POST*

    // change or create h2

}
*/

//WHICH SHOE BRAND BUTTON IS BEING CLICKED???
//on page load all buttons status = !active

//   //first time button click
//     //button status active
//     // hide buttons without that id

//     //WHAT TO DO W H2 ELEMENT
//       //change text content of 2nd <h2> to Upcoming (brand) Releases
//         /*document.querySelector('#release-shoes').textContent = 
//         All Upcoming Jordans*/

//       //hide existing h2 element
//       // create new h2 element
//         // const h2 = document.createElement('h2');
//         // h2.className = '(brand clicked)';
//         // h2.textContent = 'All upcoming (brand) releases'
//         // remove when button clicked again

//     //WHAT TO DO W ARRAYS
//       // make a new empty array 
//         //hides og array of all shoes
//         //new array displays shoes of (brand)
        
//       //Remove shoes without (brand) from the orgional array
//         //
//         //if you want to go back to og ...

//     //displays new array of shoes

//   //second time button click
//     // <h2>
//       // reverts h2 text content
//       // or if new h2 was made 
//         //show og h2
//         // delete new h2

//     // shoe brand buttons
//       // show all brand images (buttons)

//     //ARRAY OF SHOES
//       // just call renderShoe again to display all shoes???
    
// })

/* REGARDING FORM 
  // Header to explain how to add new shoe / why

  // "Add Upcoming Shoe" button makes shoe form visible
    // On click, button text content = "Close Shoe Form"

  // WHAT ARE THE SHOE IDs???
  // Make input forEach??? attribute of "shoes" ???
  // submit button 
    // Thank you alert on submit 
    // adds shoe to json server
    // should update array
*/

/* MOUSEOVER EVENT
  // Displays attributes not in renderShoe
  // timeout of 2 seconds (when hovering over shoe dont show right away)
*/


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