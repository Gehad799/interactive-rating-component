var btn = document.getElementsByTagName("button")[0];
var submit_card = document.getElementsByClassName("submit_card")[0];
var thanks_card = document.getElementsByClassName("thanks_card")[0];

btn.addEventListener("click", function () {
    submit_card.style.display = "none";
    thanks_card.style.display = "block";
});

var ratings = document.getElementsByTagName("li");

for (var i = 0; i < ratings.length; i++) {
    ratings[i].addEventListener("click", function () {
        for (var j = 0; j < ratings.length; j++) {
            ratings[j].classList.remove("selected");
        }
        this.classList.add("selected");
        var selectedRating = this.textContent;
        var selection=document.getElementsByClassName("selection")[0];
        selection.textContent = "You selected " + selectedRating + " out of 5";
    });
}
