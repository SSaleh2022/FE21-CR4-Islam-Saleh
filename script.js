let moviesJson = JSON.parse(movies);

function updateHTML() {
    document.getElementById("Movies_content").innerHTML = "";
    for (let val of moviesJson) {
        document.getElementById("Movies_content").innerHTML += `
    <div id="colum" class="col-lg-6 col-md-6 col-xs-12">
    <div id="main">
     <div><img id="img" src="${val.image}" width="250" height="250">
     </div>
    <div id="section-div"><h4>${val.movieName}</h4>
    <p>${val.description}</p>
    <div id="like">
    <button class="click">👍</button><span class="result">${val.likes}</span>
    </div>
     </div>
       </div>
         </div>`;
    }
    increaselikes();
}



function increaselikes() {
    let btns = document.getElementsByClassName("click");
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
            moviesJson[i].likes++;
            updateHTML(moviesJson);
        });

    }
}

updateHTML(moviesJson);

function sort() {
    moviesJson.sort((a, b) => {
        return b.likes - a.likes;
    });
}
document.getElementById("sort").addEventListener("click", sort);

document.getElementById("sort").addEventListener("click", function() {
    sort();
    updateHTML(moviesJson);
})