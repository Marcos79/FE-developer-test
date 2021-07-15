

function myFunction(event) {
    let card = event.target.closest(".card");
    let dots = card.querySelector("#dots");
    let moreText = card.querySelector("#more");
    let btnText = card.querySelector("#button");


    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Show more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Show less";
        moreText.style.display = "inline";
    }
}