let plus_button = document.getElementById("add-log");
let emoji = document.getElementById("emoji");
let study_types = document.getElementById("study-types");
let emojiList = document.getElementsByClassName("emoji-pic");
let studyType = document.getElementsByClassName("icon");
let select_button = document.getElementById("select-button");
let hoursSelected = -1;
let typeOfStudy = -1;


/* Reveals the emoji select pop-up */
function revealEmoji() {
    emoji.classList.add("reveal");
    console.log("Reveal Emoji is Functional");
}

/* Reveals the language select pop-up and hides the emoji one */
function revealStudyTypes() {
    if (hoursSelected == -1) {
        return;
    }
    emoji.classList.remove("reveal");
    study_types.classList.add("reveal");
    console.log("Reveal Lang is Functional");
    console.log(hoursSelected)
}

/* adds listener events to the buttons */
plus_button.addEventListener("click", revealEmoji);
select_button.addEventListener("click", revealStudyTypes);

function sendLetters(filler, filler2) {
    for (let i=0; i < filler.length; i++) {
        filler[i].addEventListener("click",function(){select(filler2 , i)});
    }
};

function select(numberChange, number) {
    numberChange = number;
    console.log(hoursSelected)
};

sendLetters(emojiList, hoursSelected)
sendLetters(studyType, typeOfStudy)
