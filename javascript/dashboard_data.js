import { insertNewLog } from '/javascript/requests.js';

let addLogButton = document.getElementById("add-log");
addLogButton.addEventListener("click", appendLogs);

const collection = {};

const type = document.getElementById("input-type").value;
const time = document.getElementById("input-time").value;
const date = document.getElementById("input-date").value;
const entries = [type ,time, date]

collection.type = type;
collection.time = time;
collection.date = date;

function appendLogs() {
    let placeholder = "";

    for (let i=0;i<entries.length;i++) {
        placeholder = placeholder + `<div class="card">` + getLog(entries[i]) + `</div>` +"<br>";
    }
    entries.innerHTML = placeholder;
}

function getLog(log) {
    let placeholder = "";

    for (let key in log) {
        let element = log[key];

        if (key == `type`) {
            element = `<p class="card-top title">`+element+`</p>`;            
        }

        let appendLogs = `<div class="text">`+element+`</div>`
        placeholder = placeholder + appendLogs;
    }

    return placeholder
}

console.log("Inserting Item");
console.log(collection);

insertNewLog(collection);