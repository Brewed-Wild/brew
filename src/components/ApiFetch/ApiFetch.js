const allBeers = [];
for (let i = 1; i <= 5; i ++) {
    const beerPage = `https://api.punkapi.com/v2/beers?per_page=80&page=${i}`;
    fetch(beerPage)
    .then(response => response.json ())
    .then(data => allBeers.push(...data))
    }

export default allBeers;
