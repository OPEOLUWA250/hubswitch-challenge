 
const btn = document.querySelector('#browse');

btn.addEventListener('click', showGames);

function showGames() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '241784390bmsh547969a5cfe7205p1e274cjsne3a063539b49',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    
   
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', options) 
    .then(response => response.json())
    .then(response => {
        console.log(response)
        let result = response;
        let output = result.map((result) => 
        `
        <div class = "col-md-3 col-sm-12 "> 
        <div class="well text-center">
            <img class="img-thumbnail" src="${result.thumbnail}" alt="images-of-games" />
            <h4><b>${result.title}</b></h4>
            <a class="btn btn-primary mt-3" href="${result.freetogame_profile_url}" target="_blank">Play Game</a>
            </div>
            </div>
        `
        )
     
        document.querySelector('#final').innerHTML = output;
    })
    
    .catch(err => console.error(err));
               
}
