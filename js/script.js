// Scroll to top button

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("toTop").style.display = "block";
    } else {
        document.getElementById("toTop").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Scrolling text
var options = [
    ["Passarinho que come pedra...<br>...Sabe o cu que tem"],
    ["Apressado...<br>...come cu"],
    ["A de amor, B de baixinho...<br>...C de coração"],
    ["Um dia você perde...<br>...No outro você não ganha"]
];

var interval = 5000;

var holder1 = $(".alternatingmotd");
var currentIndex = 0;

function changeText() {
    holder1.html(options[currentIndex][0]);
    currentIndex = (currentIndex + 1) % options.length;
    setTimeout(changeText, interval);
}

changeText();