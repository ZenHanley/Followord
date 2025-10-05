let plus_button = document.getElementById("add-log");
let emoji = document.getElementById("emoji");
let language_options = document.getElementById("language-options");
let lang = document.getElementById("lang-button");


function revealEmoji() {
    emoji.classList.add("reveal");
    console.log("Reveal Emoji is Functional");
}

function revealLang() {    
    language_options.classList.add("reveal");
    emoji.classList.remove("reveal");
    console.log("Reveal Lang is Functional");
}

plus_button.addEventListener("click", revealEmoji);
lang.addEventListener("click", revealLang);