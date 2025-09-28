
console.log("Requests file loaded")

/* Inserts new UserDetails data into PostgreSQL "userdetails" from main.js */
function insertAllUserDetails() {
    return fetch ("http://localhost:3000/api/userdetails", {
        method: "POST",
        headers: {
            "Content-Type": "application/json", // tells backend to expect JSON
        },
        
        body: JSON.stringify(userDetailsData)
        })

        .then(response => {
            if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text(); // We're going to receive text as response
        })
        .then(data => {
            console.log("Server response:", data);
        })
        .catch(error => {
            console.error("Request failed:", error);
});
}

/* Inserts New UserTime data into PostgreSQL "usertime" from main.js */
function insertAllUserTime() {
    return fetch ("http://localhost:3000/api/usertime", {
        method: "POST",
        headers: {
            "Content-Type": "application/json", // tells backend to expect JSON
        },
        body: JSON.stringify(userTimeData)
        })
        .then(response => {
            if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text(); // We're going to receive text as response
        })
        .then(data => {
            console.log("Server response:", data);
        })
        .catch(error => {
            console.error("Request failed:", error);
});
}

function insertNewLog(log) {
  return fetch("http://localhost:3000/api/usertime", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // tells backend to expect JSON
    },
    body: JSON.stringify(location)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.text();
    })
    .then(data => {
      console.log("Server response:", data);
    })
    .catch(error => {
      console.error("Request failed:", error);
    });
}

export { insertAllUserDetails, insertAllUserTime, insertNewLog};