const entryOne = {
    type: "Reading",
    length: "3 Hours",
    date: "17/09/2025"
};

const entryTwo = {
    type: "Writing",
    length: "2 Hours",
    date: "15/09/2025"
};

const entryThree = {
    type: "Reading",
    length: "1 Hour",
    date: "12/09/2025"
};

const entries = [entryOne,entryTwo,entryThree]
let addTime = document.getElementById("add-time");
addTime.addEventListener("click", appendLogs);

function appendLogs() {
    let placeholder = "";
    const allLogs = document.getElementById("previous-logs");

    for (i=0;i<entries.length;i++) {
        placeholder = placeholder + getLog(entries[i]) + "<br>"
    }
    
    allLogs.innerHTML = placeholder;
}

function getLog(log) {
    let placeholder = "";

    for (let key in log) {
        let element = log[key];

        if (key == `type`) {
            element = `<mark class=card-top>` +element+ `</mark>`;            
        }

        let appendLogs = 
        `<div class=card>` +
            `<div class="text">` +element+ `</div>` +
        `</div>`;

        placeholder = placeholder + appendLogs;
    }

    return placeholder
}