function renderBrand(brand){
    const li = document.createElement('li');
    li.className = 'shoe-brand';

    const img = document.createElement('img');
    img.src = brand.image;
    img.alt = `${brand.name} logo`;

    li.append(img);
    document.querySelector('#brand-list').append(li);
}
fetch('http://localhost:3000/brands')
.then((response) => response.json())
.then((brands) => brands.forEach(renderBrand));