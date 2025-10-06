let plus_button = document.getElementById("add-log");
let emoji = document.getElementById("emoji");
let study_types = document.getElementById("study-types");
let emojiList = document.getElementsByClassName("emoji-pic");
let studyType = document.getElementsByClassName("icon");
let select_button = document.getElementById("select-emoji-button");
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
    console.log("Reveal StudyTypes is Functional");
}

/* adds listener events to the buttons */
plus_button.addEventListener("click", revealEmoji);
select_button.addEventListener("click", revealStudyTypes);

function sendLetters(filler) {
    for (let i=0; i < filler.length; i++) {
        filler[i].addEventListener("click",function(e){select(filler[i] , i)});
    }
};

function select(e, number) {
    if (e.className == "emoji-pic"){
        hoursSelected = number;
    }
    else if (e.className == "icon"){
        typeOfStudy = number;
    }

    console.log(hoursSelected, typeOfStudy)
};

sendLetters(emojiList)
sendLetters(studyType)
