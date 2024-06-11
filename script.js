const categories = ['Action', 'Horror', 'Science Fiction', 'Latest', 'Trending'];
const movies = [
    { title: 'Movie 1', category: 'Action', image: 'https://th.bing.com/th/id/OIP.9QcDMiT9pM_JWGREDEvelgHaJ4?rs=1&pid=ImgDetMain.jpg' },
    { title: 'Movie 2', category: 'Horror', image: 'https://th.bing.com/th/id/OIP.YxdQyZwjRh8-1ZH3i-y1IAHaJr?rs=1&pid=ImgDetMain.jpg' },
    { title: 'Movie 3', category: 'Science Fiction', image: 'https://th.bing.com/th/id/OIP.p0PfZOr889eFgaDvE-f2xwAAAA?rs=1&pid=ImgDetMain.jpg' },
];

function populateCategories() {
    const categoriesSection = document.getElementById('categories');
    categories.forEach(category => {
        const categoryElement = document.createElement('button');
        categoryElement.textContent = category;
        categoryElement.addEventListener('click', () => filterMovies(category));
        categoriesSection.appendChild(categoryElement);
    });
}

function filterMovies(category) {
    const moviesSection = document.getElementById('movies');
    moviesSection.innerHTML = '';
    const filteredMovies = movies.filter(movie => movie.category === category);
    filteredMovies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <p>${movie.title}</p>
        `;
        moviesSection.appendChild(movieElement);
    });
}

function init() {
    populateCategories();
    filterMovies(categories[0]); 
}

init();
