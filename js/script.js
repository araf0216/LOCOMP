$(document).ready(function(){
    let nice = $("html").niceScroll({
        cursorcolor:"#000058",
        cursorwidth:"0.45vw",
        zindex:100
    });
});

let form = document.getElementsByClassName("actfo");

actfo.addEventListener("submit", submFunc, false);

function submFunc(e) {
    e.preventDefault();
}