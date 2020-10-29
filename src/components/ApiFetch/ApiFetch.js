let allBeer = []
for(i=1; i <=5; i++){
    let beerPage = `https://api.punkapi.com/v2/beers?per_page=80&page=${i}`
    fetch(beerPage)
    .then(response => response.json())
    .then(data => allBeer.push(...data))
}

export default allBeers;