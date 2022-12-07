
function renderBrand(brand){
    const li = document.createElement('li');
    li.className = 'shoe-brand';

    const img = document.createElement('img');
    img.src = brand.image;
    img.alt = `${brand.name} logo`;
    img.className = brand.name;

    li.append(img);
    document.querySelector('#brand-list').append(li);

    img.addEventListener('click', (e)=> console.log("jordans clicked"));
}
//click on brand image and filter array
function filterShoesByBrand(shoe){
    var jordansArray = shoes.filter(function (shoe) {
        return shoe.brand = "Air Jordan"
    });
}
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