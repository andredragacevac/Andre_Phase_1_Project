
function renderBrand(brand){
    const li = document.createElement('li');
    li.className = 'shoe-brand';

    const img = document.createElement('img');
    img.src = brand.image;
    img.alt = `${brand.name} logo`;

    li.append(img);
    document.querySelector('#brand-list').append(li);
}
getJSON("http://localhost:3000/brands")
  .then((brands) => {
    brands.forEach(brand => renderBrand(brand))
})
// fetch('http://localhost:3000/brands')
// .then((response) => response.json())
// .then((brands) => brands.forEach(renderBrand));
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