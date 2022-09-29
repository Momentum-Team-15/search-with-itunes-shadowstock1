let form = document.querySelector("#form");
let artistBand = document.querySelector("#bandBar");
// console.log(artistBand);



form.addEventListener("submit", (event) => {
  event.preventDefault();
  let search = artistBand.value;
  const url = `https://proxy-itunes-api.glitch.me/search?term=${search}&limit=15`;
  getData(url);
  artistBand.value = "";
});

function getData(url) {
    fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
        // fetch gives us back a response in json format when it is ready
        // when you get a response back from the fetch, do something with it
        // we are naming the response `response`
        .then(function (response) {
          // parse the response
          return response.json();
        })
        // take what just got returned (response.json()) and do something with it
        // we assign response.json() to the variable `parsedResponse`
        .then(function (data) {
            displayArray(data.results);
        //   console.log(data.results);
        });
}

let displayResults = document.querySelector("#displayResults");

function displayArray(dataArray) {
    displayResults.innerHTML = "";
    for (let data of dataArray) {
        let cardDiv = document.createElement("div");
        let albumArt = document.createElement("img");
        let artistName = document.createElement("h1");
        let trackTitle = document.createElement("h2");
        let playButton = document.createElement("audio");

        albumArt.src = `${data.artworkUrl100}`;
        artistName.src = `${data.artistName}`;
        trackTitle.innertext = `${data.trackName}`;
        playButton.src = `${data.previewUrl}`;
        playButton.controls = true;

        cardDiv.appendChild(albumArt);
        cardDiv.appendChild(artistName);
        cardDiv.appendChild(trackTitle);
        cardDiv.appendChild(playButton);
        displayResults.appendChild(cardDiv);
    }
    }

    // function validateForm(){
    //     let input = document.myForm.myBandBar.value;
    //     if (input == null || input == ""){
    //         alert ("Please enter an artist or band name");
    //         alert false;
    //     }
    // //     else 
    // }