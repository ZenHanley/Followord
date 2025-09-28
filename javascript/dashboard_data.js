
const type = document.getDocumentById("input-type").value;
const time = document.getDocumentById("input-time").value;
const date = document.getDocumentById("input-date").value;

const entries = [type,time,date]
let addTime = document.getElementById("add-time");
addTime.addEventListener("click", appendLogs);

function appendLogs() {
    let placeholder = "";
    const allLogs = document.getElementById("previous-logs");

    for (i=0;i<entries.length;i++) {
        placeholder = placeholder + `<div class="card">` + getLog(entries[i]) + `</div>` +"<br>";
    }
    
    allLogs.innerHTML = placeholder;
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