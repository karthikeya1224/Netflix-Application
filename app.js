let container=document.getElementById('container')
container.classList.add('display')
let title = document.getElementById('title');
let desc = document.getElementById('desc');
let year = document.getElementById('year');
let genre = document.getElementById('genre');
let actors = document.getElementById('actors');
let director = document.getElementById('director');
let earnings = document.getElementById('earnings');
let ratings = document.getElementById('ratings');
let img = document.getElementById('img');
let awards = document.getElementById('awards')
let btn=document.getElementById('btn')
btn.addEventListener('click',()=>{
let text=document.getElementById('text').value
let api='http://www.omdbapi.com/?apikey=61e576a4&t='+text
fetch(api)
.then(function(response){
    return response.json()
})
    .then((data)=>{
        console.log(data);
        title.innerText = data.Title;
            desc.innerText = data.Plot;
            actors.innerText = data.Actors;
            director.innerText = data.Director;
            ratings.innerText = data.Ratings[0].Value;
            earnings.innerText = data.BoxOffice;
            img.src = data.Poster;
            awards.innerText = data.Awards;
            year.innerText = data.Year;
            container.classList.remove('display')
        
    })
})